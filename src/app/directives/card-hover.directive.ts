// https://www.udemy.com/angular-2-from-theory-to-practice/learn/v4/t/lecture/6039246
import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[ccCardHover]'
})
export class CardHoverDirective {

    @Input() config:Object = {
        querySelector: '.card-text'
    };

    @HostBinding('class.shaddow') private isShowingBorder:boolean = false;

    constructor(private el:ElementRef, private render:Renderer) {
        render.setElementStyle(el.nativeElement, 'backgroundColor', '#ECEEEF');
    }

    @HostListener('mouseover') onMouseOver() {
        // Gets the selector
        let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
        // Sets css properties to selector
        this.render.setElementStyle(punchlineEl, 'display', 'block');
        // Calls true or false
        this.isShowingBorder = true;
    }

    @HostListener('mouseout') onMouseOut() {
        let punchlineEl = this.el.nativeElement.querySelector('.card-text');
        this.render.setElementStyle(punchlineEl, 'display', 'none');
        this.isShowingBorder = false;
    }

}
