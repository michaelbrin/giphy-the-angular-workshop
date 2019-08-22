import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-giphy-search-form',
  templateUrl: './giphy-search-form.component.html',
  styleUrls: ['./giphy-search-form.component.css']
})
export class GiphySearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()
  
  searchTerm:string;
  constructor() { }

  search(){
    this.emitSearch.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
