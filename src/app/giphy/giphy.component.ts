import { Component, OnInit } from '@angular/core';
import {GiphyHttpServiceService} from '../services/giphy-http-service.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  constructor(public giphyHttpService:GiphyHttpServiceService) { }

  ngOnInit() {
  }

  searchGiphy(searchTerm){
      this.giphyHttpService.searchGiphies(searchTerm)
  }

}
