import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
    @WebSocketServer()
    server;
    @SubscribeMessage('message')
    //You can change the decorator @MessageBody() with client and data and extract the message
    handleMessage(@MessageBody() message:string):void {
        this.server.emit('message', message);
    }
}