import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: Course[], name: string): Course[] {
    return courses.filter((course: Course) => course.title.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

}
