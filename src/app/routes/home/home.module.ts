import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components';
import { LayoutDefaultModule } from 'src/app/layouts';
import { SharedModule } from 'src/app/shared';
import { HomeRoutingModule } from './home.routing';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    LayoutDefaultModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
