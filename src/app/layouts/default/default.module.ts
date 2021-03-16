import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { ComponentsModule } from 'src/app/components';
import { LayoutDefaultComponent } from './component';


const COMPONENTS = [
  LayoutDefaultComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [],
  entryComponents: [],
})
export class LayoutDefaultModule {}
