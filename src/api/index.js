import io from "socket.io-client";
const socket = io("http://localhost:8080");

export const sendMessage = (msg, cb) => {
    socket.emit("SEND_MESSAGE", msg);
    cb();
};

export const receiveMessage = (cb) =>
    socket.on("SEND_MESSAGE", (msg) => cb(msg));