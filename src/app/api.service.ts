import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAPI(apipath){

    let key =".json?api-key=Rxx6OS4JovWjwD3jGQHWs8wr8uK7h9Ab";
    let url = "https://api.nytimes.com/svc/archive/v1/"
   return this.http.get(url+apipath+key);
  }
}
