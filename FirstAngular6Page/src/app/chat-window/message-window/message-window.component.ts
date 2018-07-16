import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { MsgItemModel } from '../../services/msg-item.model';
import { MsgHookDirective } from '../../directives/msg-hook.directive';
// import { MsgComp } from '../../services/msg.comp';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {
@Input() msgs: MsgItemModel;
@ViewChild(MsgHookDirective) msgHook: MsgHookDirective;
  constructor(private CFR:ComponentFactoryResolver, private msgService:MessageService) { }

  ngOnInit() {
    this.loadComponent();
    this.msgService.newMsg.subscribe(
      (msg:MsgItemModel)=>{
        this.msgs = msg;
        this.loadComponent();
        console.log(this.msgs);
      }
    )
  }

  loadComponent(){
    let msgItem = this.msgs;
    let componentFactory = this.CFR.resolveComponentFactory(msgItem.component);
    let viewContainerRef = this.msgHook.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = msgItem.data;
  }
}
