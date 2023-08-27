const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (client) => {
  console.log("Client connected");
  client.on("message", (message) => {
    console.log("Message received: " + message);
    wss.clients.forEach((c) => {
      if (c !== client) {
        c.send(message);
        console.log("Message sent: " + message);
      }
    });
  });
});
