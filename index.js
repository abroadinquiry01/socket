const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
        origin: "https://abroadinquiry01-legendary-doodle-x7657q945xxcg77-3000.preview.app.github.dev"
      }
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

server.listen(5000, () => {
  console.log('listening on *:5000');
});