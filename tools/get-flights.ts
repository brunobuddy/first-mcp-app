import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export function registerGetFlightsTool(server: McpServer) {
  server.registerTool(
    "get-flights",
    {
      description: "retrieves flight arrivals for a given airport code",
      inputSchema: {
        code: z.string().describe("The ICAO airport code, e.g. 'KJFK'"),
      },
    },
    async (input: { code: string }) => {
      const mockFlights = [
        { flightNumber: "AA100", airline: "American Airlines" },
        { flightNumber: "DL200", airline: "Delta Airlines" },
        { flightNumber: "UA300", airline: "United Airlines" },
      ];

      return {
        content: [{ type: "text", text: JSON.stringify(mockFlights, null, 2) }],
      };
    }
  );
}
