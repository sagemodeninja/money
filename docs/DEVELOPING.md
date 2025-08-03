# Development Guide

## Concepts

See concepts [here](./CONCEPTS.md).

## API

### Runtime

We use the [Deno](https://docs.deno.com/) runtime to build the API, primarily for its known benefits such as first-class TypeScript support and the `compile` command.

The `compile` command enables us to produce a standalone server executable, eliminating the need for a separate runtime. The server can be easily deployed and integrated with Electron or Node.js, simplifying distribution and setup.

### Storage

We use [SQLite](https://www.sqlite.org/) as our database of choice because it stores all data in a single physical file, unlike hosted remote databases. This approach meets the application's requirement to use an offline document file for storage, similar to how Excel stores data in an .xlsx file.

### Authentication

We use Bearer token authentication with JWT. When a user calls `POST /login` with valid credentials, the API issues a JWT containing a session ID (`sid`) in the payload. This `sid` serves dual purposes: session validation and retrieval of the session-specific public key used for token verification.

Each session generates a unique RSA key pair, with the public key stored server-side for JWT verification. This approach enables per-session key rotation and secure session invalidation.

### ORM

We use a custom [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) located in the `utils/_db/` directory. It is not intended to be comprehensive and is only guaranteed to work within the specific requirements of this project.