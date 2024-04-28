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
| [yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.56ms | 14kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 32.39ms | 6.2kps |
| [helix](https://github.com/contra/graphql-helix) | Node.js | http | 46.00ms | 4.3kps |
| [yoga-debugger](https://graphql-debugger.com/docs/plugins/yoga) | Node.js | http | 78.52ms | 2.5kps |
| [helix-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 100.61ms | 2.0kps |
| [apollo-debugger](https://graphql-debugger.com/docs/plugins/apollo) | Node.js | Express | 100.86ms | 2.0kps |
