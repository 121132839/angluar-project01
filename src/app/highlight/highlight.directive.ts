import { ElementRef, HostListener, Directive, Input } from '@angular/core'

@Directive({
    selector: '[appHighlight]'
})
export class HighLightDirective {

    @Input('appHighlight')
    highlightColor :string;
    
    constructor(private el: ElementRef) {

    }
    
    
    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor || 'red');
    }
    
    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }
    
    
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}