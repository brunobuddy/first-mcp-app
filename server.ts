import { RESOURCE_URI_META_KEY } from "@modelcontextprotocol/ext-apps";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

const server = new McpServer({
  name: "My First MCP App",
  version: "0.0.1",
});

const clockResourceUri = "ui://clock.html";

server.registerResource(clockResourceUri, clockResourceUri, {}, async () => {
  const html = await fs.readFile(
    path.join(import.meta.dirname, "clock.html"),
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

server.registerTool(
  "show-time",
  {
    title: "Show Current Time",
    description: "Shows the current time.",
    inputSchema: {},
    outputSchema: { time: z.string() },
    _meta: { [RESOURCE_URI_META_KEY]: clockResourceUri },
  },
  async () => {
    const time = new Date().toISOString().split("T")[1].split(".")[0];
    return {
      content: [{ type: "text", text: time }],
      structuredContent: { time },
    };
  }
);

const app = express();
app.use(express.json());

app.use("/mcp", async (req, res, next) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  res.on("close", () => {
    transport.close();
  });

  await server.connect(transport);

  await transport.handleRequest(req, res, req.body).catch(next);
});
app.listen(3000, () => {
  console.log("MCP server listening on http://localhost:3000/mcp");
});
