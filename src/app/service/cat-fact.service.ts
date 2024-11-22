import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class CatFactService{
    private catFactApi =  'https://catfact.ninja/fact';
    constructor(private httpClient : HttpClient){}
        getCatFact(): Observable<any> {
            return this.httpClient.get<any>(this.catFactApi)
          }
    }
