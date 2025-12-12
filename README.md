# First MCP App

![MCP App](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6yunmb7l5poji4dl2wyx.png)

An **MCP Server** that exposes an **MCP App** through a tool.

## Folder Structure

```
first-mcp-app/
├── resources/
│   └── flight-card/
│       ├── flight-card.ts
│       └── mcp-app/
│           ├── flight-card-mcp-app.html
│           └── flight-card-mcp-app.ts
├── tools/
│   └── get-flights.ts
├── server.ts
├── vite.config.ts
├── tsconfig.json
├── nodemon.json
└── package.json
```

## Development

```bash
npm install
npm run dev
```

## Build

The project uses:

- **TypeScript** for the MCP server
- **Vite** with `vite-plugin-singlefile` for bundling HTML resources
