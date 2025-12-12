import { RESOURCE_URI_META_KEY } from "@modelcontextprotocol/ext-apps";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { flightCardResourceUri } from "../resources/flight-card/flight-card.js";

export function registerGetFlightsTool(server: McpServer) {
  server.registerTool(
    "get-flights",
    {
      description: "retrieves flight arrivals for a given airport code",
      inputSchema: {
        code: z.string().describe("The ICAO airport code, e.g. 'KJFK'"),
      },
      _meta: { [RESOURCE_URI_META_KEY]: flightCardResourceUri },
    },
    async (input: { code: string }) => {
      const mockFlights = [
        { flightNumber: "AA100", airline: "American Airlines" },
        { flightNumber: "DL200", airline: "Delta Airlines" },
        { flightNumber: "UA300", airline: "United Airlines" },
      ];

      return {
        content: [{ type: "text", text: JSON.stringify(mockFlights, null, 2) }],
        structuredContent: { flights: mockFlights },
      };
    }
  );
}
