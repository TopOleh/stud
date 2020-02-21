import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
  private MIN_IN_HOUR = 60;
  transform(seconds: number): string {
    const hours = Math.floor(seconds / this.MIN_IN_HOUR);
    const minutes = seconds % this.MIN_IN_HOUR;

    return `${hours}h ${minutes}min`;
  }

}
