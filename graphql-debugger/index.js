import cluster from "cluster";
import { cpus } from "os";
import express from "express";
import {
  getGraphQLParameters,
  processRequest,
  sendResult,
} from "graphql-helix";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import {
  GraphQLDebuggerContext,
  traceSchema,
} from "@graphql-debugger/trace-schema";
import { ProxyAdapter } from "@graphql-debugger/adapter-proxy";

if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
} else {
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return "world";
          },
        },
      },
    }),
  });

  var adapter = new ProxyAdapter();

  var tracedSchema = traceSchema({
    schema,
    adapter,
  });

  var app = express();
  app.use(express.json());

  app.use("/graphql", async (req, res) => {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    };

    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema: tracedSchema,
      contextFactory: () => ({
        GraphQLDebuggerContext: new GraphQLDebuggerContext(),
      }),
    });

    sendResult(result, res);
  });

  app.listen(8000);
}
