import {WebSocketServer,SubscribeMessage,WebSocketGateway,OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';

@WebSocketGateway(3001,{ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect{
    
  @WebSocketServer() server;

//   @SubscribeMessage('message')
//   handleMessage(client: any, payload: any) {
//     this.server.emit('message', payload);
//     console.log('hi-1');
    
//   }

//   @SubscribeMessage('join')
//   handleJoin(client: any, payload: any) {
//     client.join(payload);
//     console.log('hi-2');
//   }
  users: number = 0;
  async handleConnection() {
    // A client has connected
    this.users++;
    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }
  async handleDisconnect() {
    // A client has disconnected
    this.users--;
    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }


  @SubscribeMessage('chat')
  async onChat(client, message) {
    client.broadcast.emit('chat', message);
  }
}
