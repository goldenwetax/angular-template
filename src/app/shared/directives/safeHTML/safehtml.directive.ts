import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[safeHTML]',
})
export class SafeHTMLDirective implements AfterViewInit {
    private _element: HTMLElement;

    constructor(private renderer: Renderer2, element: ElementRef) {
        this._element = element.nativeElement;
    }

    // update content model as it comes
    @Input()
    set safeHTML(content: string) {
        this._element.innerHTML = content;
    }

    ngAfterViewInit() {
        // this.renderer.setElementClass(this._element, 'safeHTML-View', true);
        this.renderer.addClass(this._element, 'safeHTML-View');
    }
}
