import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-producto',
  templateUrl: './search-producto.component.html',
  styleUrls: ['./search-producto.component.css']
})
export class SearchProductoComponent implements OnInit{
  search= new FormControl;
  value:string;

  constructor(){
    this.value="";
  }
  ngOnInit(){
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value=>{
      if(value!=null){
        this.value=value;
      }
      this.seachEmmiter.emit(this.value);
    })
  }

  @Output('search') seachEmmiter= new EventEmitter<string>();
}
