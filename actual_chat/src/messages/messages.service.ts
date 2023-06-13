import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity'

@Injectable()
export class MessagesService {
  
  //USE A DATABASE HERE
  messages: Message[] = [{ name: 'Zeeks', text: 'heeeee'}];
  clientToUser = {};
  identify(name: string, clientID: string)
  {
    this.clientToUser[clientID] = name
    return Object.values(this.clientToUser);
  }

  getClientName(clientID: string) {
    return this.clientToUser[clientID];
  }
  create(createMessageDto: CreateMessageDto) {
    const message = {...createMessageDto};
     this.messages.push(message);
     return message;
    //ADD WUERY TO INSERT IN DATABASE
  }

  findAll() {
    return this.messages;

    //ADD QUERY TO SELECT THE MESSAGES
  }

}
