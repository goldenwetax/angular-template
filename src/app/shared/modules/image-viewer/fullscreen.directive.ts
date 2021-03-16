import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
    selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('ngxToggleFullscreen')
    isFullscreen: boolean;

    constructor(private el: ElementRef) {

    }

    ngOnChanges() {
        const _sf: any = screenfull;
        if (this.isFullscreen && _sf.enabled) {
            _sf.request(this.el.nativeElement);
        } else if (_sf.enabled) {
            _sf.exit();
        }
    }

}
