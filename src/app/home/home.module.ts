import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutDefaultModule } from '../layouts';
@NgModule({
  imports: [
    SharedModule,
    LayoutDefaultModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
