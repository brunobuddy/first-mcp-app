import { App, PostMessageTransport } from "@modelcontextprotocol/ext-apps";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

const app = new App({
  name: "Clock App",
  version: "0.0.1",
});

const serverTimeEl = document.getElementById("time")!;
const refreshButton = document.getElementById("refresh-button")!;

app.ontoolresult = (result) => {
  const time = result.structuredContent?.time as string;
  if (time) {
    serverTimeEl.textContent = time;
  }
};

refreshButton.addEventListener("click", async () => {
  const toolResult: CallToolResult = await app.callServerTool({
    name: "show-time",
    input: {},
  });

  const time = toolResult.structuredContent?.time as string;
  if (time) {
    serverTimeEl.textContent = time;
  }
});

app.connect(new PostMessageTransport(window.parent));
