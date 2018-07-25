import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
constructor(){}

private guid() {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    loginCheck() {
        sessionStorage.setItem('GUID', this.guid());
    }
}