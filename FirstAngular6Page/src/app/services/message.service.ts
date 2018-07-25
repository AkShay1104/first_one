
import { MsgItemModel } from "./msg-item.model";
import { MsgToComponent } from "../chat-window/message-window/msg-to/msg-to.component";
import { Injectable, EventEmitter } from "@angular/core";
import { MsgFromComponent } from "../chat-window/message-window/msg-from/msg-from.component";



@Injectable()
export class MessageService{
    newMsg= new EventEmitter<MsgItemModel>();
    private messages: MsgItemModel =
        new MsgItemModel(MsgFromComponent,{'msg':'Hello, I am your bot. How can i help you?',
    'date':'16-07-2018'});

    getMsg(){
        return this.messages;
        // [
        //     new MsgItem(MsgToComponent,'13-07-2018'),
        //     new MsgItem(MsgFromComponent,'ok') 
        // ];
    }

    onNewMsg(msg:string){
        this.messages = new MsgItemModel(MsgToComponent,{'msg':msg,'date':'16-07-2020'});
        this.newMsg.emit(this.messages);
    }
    onNewResponse(msg:string){
        this.messages = new MsgItemModel(MsgFromComponent,{'msg':msg,'date':'16-07-1995'});
        this.newMsg.emit(this.messages);
    }
}