<!-- README.md is generated from README.ecr, do not edit -->

# GraphQL Debugger Benchmarks

https://www.graphql-debugger.com

Graphql server benchmarks in many frameworks.

All servers implement a simple schema:

```graphql
type Query {
  hello: String!
}
```

The returned string is always `world`.

The API is served over HTTP using a common web server and load tested using [bombardier](https://github.com/codesenberg/bombardier).

### Results

| Name                          | Language      | Server          | Latency avg      | Requests      |
| ----------------------------  | ------------- | --------------- | ---------------- | ------------- |
| [Mercurius](https://github.com/mercurius-js/mercurius) | Node.js | Fastify | 9.94ms | 20kps |
| [graphql-yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.95ms | 13kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 32.50ms | 6.1kps |
| [helix](https://github.com/contra/graphql-helix) | Node.js | http | 45.53ms | 4.4kps |
| [apollo-debugger](https://graphql-debugger.com/docs/plugins/apollo) | Node.js | Express | 98.32ms | 2.0kps |
| [helix-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 102.98ms | 1.9kps |
