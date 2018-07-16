import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { DialogflowService } from '../../services/dialogflow.service';


@Component({
  selector: 'app-text-side',
  templateUrl: './text-side.component.html',
  styleUrls: ['./text-side.component.css']
})
export class TextSideComponent implements OnInit {
  @ViewChild('f') inputMessage: ElementRef;
  constructor(private msgService: MessageService, private dialogflow: DialogflowService) { }

  ngOnInit() {
  }

  onSubmit(f: ElementRef) {
    console.log(this.inputMessage.nativeElement.value);
    let msg = this.inputMessage.nativeElement.value;
    this.msgService.onNewMsg(msg);
    this.dialogflow.onConversation(msg).subscribe(
      (response: any) => {
        console.log(response.result.fulfillment.speech);
        this.msgService.onNewResponse(response.result.fulfillment.speech);
      
      }
    )
  }
}
