var WebSocketServer = require("ws").Server;
var wsServer = new WebSocketServer({
    port: 8181
});
wsServer.on("connection", function (ws) {
    console.log("与客户端连接成功");
    ws.on("message", function (message) {
        console.log(message);
    })
});