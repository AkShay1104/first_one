import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";






@Injectable()


export class DialogflowService {
    private accessToken = environment.accessToken;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken
        })
    };

    private requestURL =environment.dialogflowUrl;
    guid = sessionStorage.getItem('GUID');


    constructor(private http: HttpClient) { }

    onConversation(query: string): Observable<any> {
        // var query = checkQuery(_query);
        var data = {
            'query': query,
            'lang': 'en',
            'sessionId': this.guid,
            'resetContexts': false
        }
        return this.http.post<any>(this.requestURL, data, this.httpOptions);
    }
}