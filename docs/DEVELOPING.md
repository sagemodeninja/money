# Development Guide

## API

### Runtime

We use the [Deno](https://docs.deno.com/) runtime to build the API, primarily for its known benefits such as first-class TypeScript support and the `compile` command.

The `compile` command enables us to produce a standalone server executable, eliminating the need for a separate runtime. The server can be easily deployed and integrated with Electron or Node.js, simplifying distribution and setup.

### Storage

We use [SQLite](https://www.sqlite.org/) as our database of choice because it stores all data in a single physical file, unlike hosted remote databases. This approach meets the application's requirement to use an offline document file for storage, similar to how Excel stores data in an .xlsx file.