const app = require("express")();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

const io = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log("user connected");
    socket.on("SEND_MESSAGE", (message) => {
        io.emit("SEND_MESSAGE", message);
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
});


