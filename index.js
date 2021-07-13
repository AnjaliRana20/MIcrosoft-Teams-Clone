// This file is connected to SocketContext.js
//  Backend

const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {      // Backend, contains what to do after having connection to the socket
	
	socket.emit("me", socket.id);  
	
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
		
	});

	// callUser was emitted in SocketContext.js and set the parameters name and id of the caller
	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name});
	});

	// answerUser was emitted in SocketContext.js and set the parameters to and signal
	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

	// callEnded was emitted in SocketContext.js, here we give signal to 
	// the other end for reloading the page if call is cut on one end
	socket.on("callEnded", () => {
		socket.broadcast.emit("callEnded");
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));