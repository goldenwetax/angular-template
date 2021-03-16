import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerConfig } from './image-viewer-config.model';
import { ToggleFullscreenDirective } from './fullscreen.directive';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSpinModule
  ],
  declarations: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ],
  exports: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ]
})
export class ImageViewerModule {
  static forRoot(config?: ImageViewerConfig): ModuleWithProviders<Object> {
    return {
      ngModule: ImageViewerModule,
      providers: [{ provide: 'config', useValue: config }]
    };
  }
}
