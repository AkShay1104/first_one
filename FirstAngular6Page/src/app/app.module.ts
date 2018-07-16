import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './chat-window/nav-bar/nav-bar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { TextSideComponent } from './chat-window/text-side/text-side.component';
import { MessageWindowComponent } from './chat-window/message-window/message-window.component';
import { OutputWindowComponent } from './chat-window/output-window/output-window.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing-module';
import { MsgToComponent } from './chat-window/message-window/msg-to/msg-to.component';
import { MsgFromComponent } from './chat-window/message-window/msg-from/msg-from.component';
import { MessageService } from './services/message.service';
import { MsgHookDirective } from './directives/msg-hook.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChatWindowComponent,
    TextSideComponent,
    MessageWindowComponent,
    OutputWindowComponent,
    LoginComponent,
    MsgToComponent,
    MsgFromComponent,
    MsgHookDirective
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
    //NgbModule.forRoot()
  ],
  providers: [MessageService],
  entryComponents: [MsgToComponent,MsgFromComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
