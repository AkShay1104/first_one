
import { MsgItemModel } from "./msg-item.model";
import { MsgToComponent } from "../chat-window/message-window/msg-to/msg-to.component";
import { Injectable, EventEmitter } from "@angular/core";
import { MsgFromComponent } from "../chat-window/message-window/msg-from/msg-from.component";



@Injectable()
export class MessageService{
    newMsg= new EventEmitter<MsgItemModel>();
    private messages: MsgItemModel =
        new MsgItemModel(MsgFromComponent,'Hello');

    getMsg(){
        return this.messages;
        // [
        //     new MsgItem(MsgToComponent,'13-07-2018'),
        //     new MsgItem(MsgFromComponent,'ok') 
        // ];
    }

    onNewMsg(a:string){
        this.messages = new MsgItemModel(MsgToComponent,a);
        this.newMsg.emit(this.messages);
    }
}