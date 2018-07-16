import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-text-side',
  templateUrl: './text-side.component.html',
  styleUrls: ['./text-side.component.css']
})
export class TextSideComponent implements OnInit {
@ViewChild('f') inputMessage:ElementRef;
  constructor(private msgService: MessageService) { }

  ngOnInit() {
  }

  onSubmit(f: ElementRef) {
    console.log(this.inputMessage.nativeElement.value);
    let a = this.inputMessage.nativeElement.value;
    this.msgService.onNewMsg(a);
  }
}
