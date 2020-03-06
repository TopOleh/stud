import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule {}
