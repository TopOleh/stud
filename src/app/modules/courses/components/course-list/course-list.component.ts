import { Component } from '@angular/core';

import { Course } from 'app/modules/courses/interfaces/course';

const MOCK_DATA: Course[] = [
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T10:37:49.771Z'
  },
  {
    id: '5db5ab9688d1f5798bdae16e',
    title: 'SASS/SCSS',
    topRated: false,
    duration: 273,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T13:16:40.108Z'
  },
  {
    id: '5db5ab96e35cdf81051d5d8d',
    title: 'Angular 8',
    topRated: true,
    duration: 101,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-24T19:25:40.875Z'
  },
  {
    id: '5db5ab968b56aafd9d082974',
    title: 'Vue.Js',
    topRated: true,
    duration: 236,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-27T16:06:51.216Z'
  },
  {
    id: '5db5ab96bad7386fadc2d57d',
    title: 'React.Js',
    topRated: false,
    duration: 841,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-07T11:08:03.663Z'
  },
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T10:37:49.771Z'
  },
  {
    id: '5db5ab968b56aafd9d082974',
    title: 'Vue.Js',
    topRated: true,
    duration: 236,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-27T16:06:51.216Z'
  },
  {
    id: '5db5ab96bad7386fadc2d57d',
    title: 'React.Js',
    topRated: false,
    duration: 841,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-07T11:08:03.663Z'
  },
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T10:37:49.771Z'
  },
  {
    id: '5db5ab9688d1f5798bdae16e',
    title: 'SASS/SCSS',
    topRated: false,
    duration: 273,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T13:16:40.108Z'
  }
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  courses: Course[] = MOCK_DATA;

  onDelete(courseId: string): void {
    console.log('Delete course id:', courseId);
  }
}
