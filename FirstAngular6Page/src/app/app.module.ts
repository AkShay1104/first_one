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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChatWindowComponent,
    TextSideComponent,
    MessageWindowComponent,
    OutputWindowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
