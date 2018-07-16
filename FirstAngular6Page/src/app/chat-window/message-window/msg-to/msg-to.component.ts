import { Component, Input } from '@angular/core';
// import { MsgComp } from '../../../services/msg.comp';
interface MsgComp{
  data: any;
}
@Component({
  selector: 'app-msg-to',
  templateUrl: './msg-to.component.html',
  styleUrls: ['./msg-to.component.css']
})
export class MsgToComponent implements MsgComp {
@Input() data:any;
}
