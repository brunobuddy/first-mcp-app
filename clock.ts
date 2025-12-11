import { App, PostMessageTransport } from "@modelcontextprotocol/ext-apps";

const app = new App({
  name: "Clock App",
  version: "0.0.1",
});

const serverTimeEl = document.getElementById("time")!;

app.ontoolresult = (result) => {
  const time = result.structuredContent?.time as string;
  if (time) {
    serverTimeEl.textContent = time;
  }
};

app.connect(new PostMessageTransport(window.parent));
