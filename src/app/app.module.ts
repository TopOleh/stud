import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchPipe } from './modules/courses/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    // Should be the last !!!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
