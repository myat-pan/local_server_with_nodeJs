

const WebSocket = require("ws");

//wss = new WebSocket("ws://localhost:5556");
const wss = new WebSocket.Server({ port: 5556 });

wss.on("connection", ws => {
 console.log("^^^^^^^^^^^^^^^^^");

  // ws.on("message", message => {
  //   ws.send("Echo message sent back from server: " + message);
  //   console.log("Message sent");
  // });

  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
     console.log(client.readyState);
     console.log(client);
     var req = ws.upgradeReq;
     console.log(req);
    // clients.addEventListener
      if ( client.readyState === WebSocket.OPEN) {
        console.log('ON MESSAGE');
      //   sendButton.click(function(e) {
      //     var msg = $('#sendMessage').val();
      //     addMessage(msg, 'SENT');
      //     ws.send(msg);
      //     client.send(msg);
      //     saveHistory(msg);
      // });
     // var msg = data.values();
      //console.log(msg);

      client.send("Send from Server Request");
      
        ws.send("THis is from server.");
      }
    });
  });
  //ws.send("Hello! Message from server. You've just connected to the server!!");
console.log("Hello! Message from server. You've just connected to the server!!");
});

wss.on('close', function close() {
  console.log('disconnected');
});

wss.emit('message', 'message from server',e => {
  e.send("Hello!");
  console.log("emit");
});

wss.onmessage = function(e) {
  log("Message received: " + e.data);
  ws.close();
}



