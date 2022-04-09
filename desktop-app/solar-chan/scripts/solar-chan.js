const websocket = new WebSocket('ws://localhost:5006');

// not sending anything right now
// socket.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });

// Listen for messages
websocket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});