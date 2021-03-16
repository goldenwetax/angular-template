import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // front
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { title: '' } },
  { path: 'home2', loadChildren: () => import('./routes/home').then(m => m.HomeModule), data: { title: '' } },
  
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
