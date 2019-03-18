
class IOCon{
    io
    ioSessions
    constructor() {
    }
    config(io,ioSessions){
        this.io = io;
        this.ioSessions = ioSessions;
        this.io.on('connection', (socket) => {
            this.ioSessions[""+socket.handshake.query.userId] = socket.id;
        });
    }
    emitToUser(userId,channel,data){
        this.io.to(this.getSessionOfUser(userId)).emit(channel,data);
    }
    broadcast(channel,data){
        this.io.emit(channel,data);
    }
    getSessionOfUser(userId){
        return this.ioSessions[userId];
    }
}

export default new IOCon()