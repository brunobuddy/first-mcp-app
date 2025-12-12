import { App, PostMessageTransport } from "@modelcontextprotocol/ext-apps";

// Create a new MCP App instance.
const app = new App({
  name: "Flight Card MCP App",
  version: "0.0.1",
});

const flightsEl = document.getElementById("flights")!;

// Handle tool results to display flight information.
app.ontoolresult = (result) => {
  const flights = result.structuredContent?.flights as {
    flightNumber: string;
    airline: string;
  }[];

  flights.forEach((flight) => {
    flightsEl.innerHTML += `
        <div class="card">
          <div class="icon">✈️</div>
          <div class="info">
            <div class="flight-number">${flight.flightNumber}</div>
            <div class="airline">${flight.airline}</div>
          </div>
        </div>
      `;
  });
};

app.connect(new PostMessageTransport(window.parent));
