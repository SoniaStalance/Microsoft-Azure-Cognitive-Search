import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CognitiveSearchService } from './cognitive-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cognitive Search';
  constructor(private formBuilder: FormBuilder, private searchService: CognitiveSearchService) { }

  queryForm = this.formBuilder.group({
    query: ''
  })

  getResults(){
    var value = this.queryForm.value.query;
    if(value != null && value != undefined && value!=''){
      value = encodeURIComponent(value.trim());
      const observable = this.searchService.getData(value);
      (observable).subscribe((res)=>{
        console.log(res.value)
      })      
    }else{
      console.log("Search word(s) required!");
    }
  }
}
