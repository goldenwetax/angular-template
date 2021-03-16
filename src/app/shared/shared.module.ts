import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Directives } from './directives/index.array';
import { RouterModule } from '@angular/router';
import { NgxEditorModule } from './modules/ngx-editor/ngx-editor.module';
import { LazyLoadImageModule } from './modules';
import { IconModule } from '@ant-design/icons-angular';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  // NgZorroAntdModule,
  NgxEditorModule,
  LazyLoadImageModule,
  IconModule,
  ...SHARED_ZORRO_MODULES
];
const PiPes = [
];
const COMPONENTS = [];
const DIRECTIVES = [...Directives];
const PIPES = [...PiPes];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<Object> {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
