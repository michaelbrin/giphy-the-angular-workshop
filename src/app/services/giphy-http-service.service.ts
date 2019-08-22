import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyHttpServiceService {

  constructor(private http:HttpClient) { }

  searchGiphies(searchTerm:string){
    let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.GIPHYAPIKEY;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            console.log(results);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}
