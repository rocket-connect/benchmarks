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
| [Mercurius](https://github.com/mercurius-js/mercurius) | Node.js | Fastify | 9.67ms | 21kps |
| [graphql-yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.53ms | 14kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 32.20ms | 6.2kps |
| [graphql-js](https://github.com/graphql/graphql-js) | Node.js | http | 45.77ms | 4.4kps |
| [graphql-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 107.41ms | 1.8kps |
