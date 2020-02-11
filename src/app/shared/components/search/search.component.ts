import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  findCouse(inputField) {
    console.log('Search data: ', inputField.value);
  }
}
