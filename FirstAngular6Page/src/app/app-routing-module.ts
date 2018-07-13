import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";


const appRoutes : Routes =[
    {path:'', component: LoginComponent, pathMatch:'full'},
    {path:'chatbot', component: ChatWindowComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}