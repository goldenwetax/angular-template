import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

const COMPONENTS = [
 
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
