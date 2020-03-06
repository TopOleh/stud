import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components';
import { CourseListComponent, CourseAddComponent } from '../courses/components';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'courses' },
    { path: 'courses', component: CourseListComponent },
    { path: 'add-course', component: CourseAddComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
