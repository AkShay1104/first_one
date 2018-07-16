import { Component, Input } from '@angular/core';
// import { MsgComp } from '../../../services/msg.comp';
interface MsgComp{
  data: any;
}
@Component({
  selector: 'app-msg-from',
  templateUrl: './msg-from.component.html',
  styleUrls: ['./msg-from.component.css']
})
export class MsgFromComponent implements MsgComp {
@Input() data:any;
  
}
