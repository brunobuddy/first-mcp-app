# First MCP App

![Clock App](clock.png)

A simple MCP (Model Context Protocol) server with a digital clock app.

## Installation

```bash
npm install
```

## Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run build` | Build the project (Vite + TypeScript)           |
| `npm run watch` | Watch mode with auto-rebuild and server restart |
| `npm start`     | Run the production server                       |

## Folder Structure

```
.
├── server.ts              # MCP server entry point
├── resources/             # MCP resources (UI apps)
│   └── clock/
│       ├── clock.ts       # Clock resource registration
│       └── app/
│           ├── clock-app.html   # Clock UI (HTML)
│           └── clock-app.ts     # Clock UI (TypeScript)
├── tools/                 # MCP tools
│   └── show-time/
│       └── show-time.ts   # Show time tool registration
├── dist/                  # Build output
├── vite.config.ts         # Vite config (auto-discovers resources/**/app/*.html)
├── tsconfig.json          # TypeScript config
└── nodemon.json           # Nodemon config for watch mode
```

## Development

Run the watch command to start developing:

```bash
npm run watch
```

This will:

1. Build all HTML apps with Vite (single-file output)
2. Compile TypeScript to `dist/`
3. Start the server at `http://localhost:3000/mcp`
4. Auto-rebuild and restart on file changes
