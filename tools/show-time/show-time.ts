import { RESOURCE_URI_META_KEY } from "@modelcontextprotocol/ext-apps";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { clockResourceUri } from "../../resources/clock/clock.js";

export function registerShowTimeTool(server: McpServer) {
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
}
