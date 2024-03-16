import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway(4200, {
  namespace: 'chatting',
  cors: 'http://localhost:3000',
})
export class ChattingGateway {
  @WebSocketServer()
  server: Server;

  private logger = new Logger(ChattingGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: Socket, data: { message: string }): void {
    this.logger.log(`Received message from client ${client.id}: ${data.message}`);

    // Broadcasting the message to all clients
    this.server.emit('chatMessage', {
      user: client.id,
      message: data.message,
      timestamp: new Date(),
    });
  }
}
