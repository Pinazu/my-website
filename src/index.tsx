import { serve } from "bun";
import type { ServerWebSocket } from "bun";
import index from "./index.html";
import type { WebSocketData, MessageData, UserData } from "./models";


const server = serve({  
  fetch(req, server) {
    const url = new URL(req.url);

    if (url.pathname === "/chat") {
      const cookies = new Bun.CookieMap(req.headers.get("cookie")!);
      // upgrade the request to a WebSocket
      if (server.upgrade(req, {
        // this object must conform to WebSocketData
        data: {
          createdAt: Date.now(),
          channelId: url.searchParams.get("channelId") || "",
          authToken: cookies.get("X-Token") || "",
        },
      })) {
        return; // do not return a Response
      }
      return new Response("Upgrade failed", { status: 500 });
    }
  },

  routes: {
    // Serve the index.html at the root path
    "/*": index,

    // You can add more routes here for other static assets or API endpoints
    "/v1/chat": async (req) => {
      return new Response("Chat API endpoint");
    },
  },

  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as WebSocketData,

    // connection opened
    async open(ws: ServerWebSocket<WebSocketData>) {
      // Send welcome message to client
      ws.send(JSON.stringify({
        type: "connected",
        timestamp: Date.now(),
      }));
    },

    // message received from client
    async message(ws: ServerWebSocket<WebSocketData>, message: string | Buffer) {
      try {
        // ws.data is now properly typed as WebSocketData
        const user = getUserFromToken(ws.data.authToken);

        await saveMessageToDatabase({
          channelId: ws.data.channelId,
          message: String(message),
          userId: user.id,
        });
      } catch (error) {
        console.error("Error parsing message:", error);
        ws.send(JSON.stringify({
          type: "error",
          message: "Invalid message format",
        }));
      }
    },

    // connection closed
    async close(_ws: ServerWebSocket<WebSocketData>, code: number, reason: string) {
      console.log(`WebSocket disconnected, code: ${code}, reason: ${reason}`);
    },

    // Optional lifecycle methods
    async drain(_ws: ServerWebSocket<WebSocketData>) {
      console.log(`Websocket drain`)
    },

    // Enable per-message deflate compression
    perMessageDeflate: {
      compress: true,
      decompress: true,
    },

    // Send ping frames to keep connection alive
    sendPings: true,

    // Handlers for ping/pong frames
    async ping(_ws: ServerWebSocket<WebSocketData>, _data: any) {
      console.log("Received ping");
    },
    async pong(_ws: ServerWebSocket<WebSocketData>, _data: any) {
      console.log("Received pong");
    },

    // Whether server receives its own published messages
    publishToSelf: false,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
console.log(`🔌 WebSocket available at ws://${server.hostname}:${server.port}/chat`);

function getUserFromToken(token: string) : UserData {
  return {id: "12345"}
}

async function saveMessageToDatabase(data: MessageData) {
  return
}
