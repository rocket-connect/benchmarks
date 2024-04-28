import cluster from 'cluster';
import {cpus} from 'os';
import express from 'express';
import { getGraphQLParameters, processRequest, sendResult } from "graphql-helix";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
} else {
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world';
          },
        },
      },
    }),
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
      schema,
    });

    sendResult(result, res);
  });

  app.listen(8000);
}