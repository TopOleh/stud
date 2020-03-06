import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { CourseModule } from 'app/modules/courses/course.module';

import { HomeComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CourseModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
