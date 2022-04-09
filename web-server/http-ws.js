const WebSocket = require('ws');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5005;

const websocket = new WebSocket.Server({ port: 5006 });
let solarChan;

websocket.on('connection', (wsClient) => {
  solarChan = wsClient; // note this means only one client is supported, no unique id
});

// CORs
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.text());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post('/esp-emit-solar', (req, res) => {
  if (solarChan) {
    solarChan.send('esp sends regards');
  }

  res.status(200).send('ok');
});

app.listen(port, () => {
  console.log(`App running... on port ${port}`);
});
