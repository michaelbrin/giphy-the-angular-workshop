import { Component, OnInit } from '@angular/core';
import {GiphyHttpServiceService} from '../services/giphy-http-service.service';
import {Giphy} from '../giphy';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
	giphies:Giphy[];
	constructor(public giphyHttpService:GiphyHttpServiceService) { }

	ngOnInit() {
	}

	searchGiphy(searchTerm){
	this.giphyHttpService.searchGiphies(searchTerm).then(
		()=>{
			this.giphies=this.giphyHttpService.giphies;
		},
		(error)=>{
			console.log(error)
		}
	)
	}

}
