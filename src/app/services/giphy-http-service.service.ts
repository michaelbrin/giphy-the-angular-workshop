import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiphyHttpServiceService {

  constructor() { }

  searchGiphies(searchTerm:string){
    console.log(searchTerm);
  }
}
