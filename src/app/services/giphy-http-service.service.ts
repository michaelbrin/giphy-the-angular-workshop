import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import {Giphy} from '../giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyHttpServiceService {
  giphies:Giphy[]=[];
  constructor(private http:HttpClient) { }

  searchGiphies(searchTerm:string){
    
    let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.GIPHYAPIKEY;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.giphies=[];
            for(let i=0; i<results["data"].length; i++){
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let giph = new Giphy(url);
              this.giphies.push(giph);
            }
            console.log(this.giphies);
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