import { OnInit, Component } from "@angular/core";
import { MsgItemModel } from "../services/msg-item.model";
import { MessageService } from "../services/message.service";
@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.css']
    // host:{class:'chat-window'}
})
export class ChatWindowComponent implements OnInit {
    msgs: MsgItemModel;
    constructor(private msgService: MessageService) { }

    ngOnInit() {
        this.msgs = this.msgService.getMsg();
        this.msgService.newMsg.subscribe(
            (msg: MsgItemModel) => {
                this.msgs = msg;
            }
        )
    }
}