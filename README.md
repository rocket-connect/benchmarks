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
| [Mercurius](https://github.com/mercurius-js/mercurius) | Node.js | Fastify | 9.95ms | 20kps |
| [graphql-yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.71ms | 14kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 32.64ms | 6.1kps |
| [graphql-js](https://github.com/graphql/graphql-js) | Node.js | http | 46.41ms | 4.3kps |
| [graphql-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 108.89ms | 1.8kps |
