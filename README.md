<!-- README.md is generated from README.ecr, do not edit -->

# GraphQL server benchmarks

Graphql server benchmarks in many languages. Pull requests welcome, please read [CONTRIBUTING.md](CONTRIBUTING.md)

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
| [Mercurius](https://github.com/mercurius-js/mercurius) | Node.js | Fastify | 9.79ms | 20kps |
| [graphql-yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.70ms | 14kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 32.73ms | 6.1kps |
| [graphql-js](https://github.com/graphql/graphql-js) | Node.js | http | 45.97ms | 4.3kps |
| [apollo-graphql-debugger](https://graphql-debugger.com/docs/plugins/apollo) | Node.js | Express | 99.78ms | 2.0kps |
| [graphql-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 100.77ms | 2.0kps |
