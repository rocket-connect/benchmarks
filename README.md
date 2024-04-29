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
| [yoga](https://github.com/dotansimha/graphql-yoga) | Node.js | http | 14.76ms | 14kps |
| [apollo](https://github.com/apollographql/apollo-server) | Node.js | Express | 33.30ms | 6.0kps |
| [yoga-otel](https://github.com/open-telemetry/opentelemetry-js/) | Node.js | http | 33.48ms | 6.0kps |
| [helix](https://github.com/contra/graphql-helix) | Node.js | http | 47.57ms | 4.2kps |
| [yoga-debugger](https://graphql-debugger.com/docs/plugins/yoga) | Node.js | http | 91.84ms | 2.2kps |
| [apollo-debugger](https://graphql-debugger.com/docs/plugins/apollo) | Node.js | Express | 103.84ms | 1.9kps |
| [helix-debugger](https://github.com/rocket-connect/graphql-debugger) | Node.js | http | 106.91ms | 1.9kps |
