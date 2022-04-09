const websocket = new WebSocket('ws://localhost:5006');
const body = document.body;
const msg = document.getElementById('dialog-box-msg');

let lastPing = 0; // epoch
let pingCounter = 0;

// not sending anything right now
// socket.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });

// Listen for messages
websocket.addEventListener('message', function (event) {
  if (event.data === 'esp sends regards') {
    pingCounter += 1;
    lastPing = Date.now();
  }
});

// if ping isn't cleared, assumes it's sleeping 
setInterval(() => {
  if ((Date.now() - lastPing) > 60000) {
    body.classList = "sleeping";
    pingCounter = 0;
    msg.innerText = `Solar-chan is sleeping...`;
  } else {
    body.classList = "awake";
    msg.innerText = `Solar-chan has been awake for ${pingCounter} ${pingCounter > 1 ? 'mins' : 'min'}`;
  }
}, 5000);