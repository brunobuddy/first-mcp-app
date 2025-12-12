import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs/promises";
import path from "node:path";

export const clockResourceUri = "ui://clock.html";

export function registerClockResource(server: McpServer) {
  server.registerResource(clockResourceUri, clockResourceUri, {}, async () => {
    const html = await fs.readFile(
      path.join(import.meta.dirname, "app/clock-app.html"),
      "utf-8"
    );

    return {
      contents: [
        {
          uri: clockResourceUri,
          mimeType: "text/html;profile=mcp-app",
          text: html,
        },
      ],
    };
  });
}
