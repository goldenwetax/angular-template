import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../layouts';

import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: LayoutDefaultComponent,
  children:[
    {
      path:'',
      component:HomeComponent,
      data: {  },
      canActivate: []
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
