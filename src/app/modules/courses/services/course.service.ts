import { Injectable } from '@angular/core';

import { Course } from '../interfaces/course';

let MOCK_DATA = [
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2020-02-15T10:37:49.771Z',
    authors: 'Topa'
  },
  {
    id: '5db5ab9688d1f5798bdae16e',
    title: 'SASS/SCSS',
    topRated: false,
    duration: 273,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2020-02-15T13:16:40.108Z',
    authors: 'Ola'
  },
  {
    id: '5db5ab96e35cdf81051d5d8d',
    title: 'Angular 8',
    topRated: true,
    duration: 101,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-24T19:25:40.875Z',
    authors: 'Gogi'
  },
  {
    id: '5db5ab968b56aafd9d082974',
    title: 'Vue.Js',
    topRated: true,
    duration: 236,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-27T16:06:51.216Z',
    authors: 'Garik'
  },
  {
    id: '5db5ab96bad7386fadc2d57d',
    title: 'React.Js',
    topRated: false,
    duration: 841,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-07T11:08:03.663Z',
    authors: 'Ihor'
  },
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T10:37:49.771Z',
    authors: 'Dima'
  },
  {
    id: '5db5ab968b56aafd9d082974',
    title: 'Vue.Js',
    topRated: true,
    duration: 236,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-10-27T16:06:51.216Z',
    authors: 'Vitalik'
  },
  {
    id: '5db5ab96bad7386fadc2d57d',
    title: 'React.Js',
    topRated: false,
    duration: 841,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2020-11-07T11:08:03.663Z',
    authors: 'Ivan'
  },
  {
    id: '5db5ab963c703ee7ec7fb12b',
    title: 'JavaScript Advanced',
    topRated: true,
    duration: 656,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2019-11-15T10:37:49.771Z',
    authors: 'Andrew'
  },
  {
    id: '5db5ab9688d1f5798bdae16e',
    title: 'SASS/SCSS',
    topRated: false,
    duration: 273,
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem quaerat saepe natus incidunt quo, vitae, itaque impedit dolore pariatur, possimus aliquam sequi.',
    creationDate: '2020-11-15T13:16:40.108Z',
    authors: 'Ivanka'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Course[] {
    return MOCK_DATA;
  }

  createCourse(course: Course): Course[] {
    MOCK_DATA.push(course);
    return MOCK_DATA;
  }

  getCourse(id: string): Course {
    return MOCK_DATA.filter((course: Course) => course.id === id)[0];
  }

  updateCourse(course: Course): Course[] {
    // TODO: Write properly
    return MOCK_DATA = [...MOCK_DATA, course];
  }

  removeCourse(id: string): Course[] {
    MOCK_DATA = MOCK_DATA.filter((course: Course) => course.id !== id);
    return MOCK_DATA;
  }
}
