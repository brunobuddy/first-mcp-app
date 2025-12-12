import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs/promises";
import path from "node:path";

export const flightCardResourceUri = "ui://flight-card.html";

export function registerFlightCardResource(server: McpServer) {
  server.registerResource(
    flightCardResourceUri,
    flightCardResourceUri,
    {},
    async () => {
      const html = await fs.readFile(
        path.join(import.meta.dirname, "mcp-app/flight-card-mcp-app.html"),
        "utf-8"
      );

      return {
        contents: [
          {
            uri: flightCardResourceUri,
            mimeType: "text/html;profile=mcp-app",
            text: html,
          },
        ],
      };
    }
  );
}
