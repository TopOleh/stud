import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  findCourse(inputField) {
    console.log('Search data: ', inputField.value);
  }
}
