import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LayoutDefaultComponent } from 'src/app/layouts';

const routes: Routes = [{
  path: '',
  component: LayoutDefaultComponent,
  children: [{
    path: '',
    component: IndexComponent
  }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
