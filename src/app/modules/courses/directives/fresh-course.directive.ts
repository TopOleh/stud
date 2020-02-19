import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements OnChanges {

  @Input() private creationDate: string;

  private borderColor = 'none';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.setBorderColor();
  }

  setBorderColor() {
    const currentDate: number = Date.now();
    const creationDate: number = new Date(this.creationDate).getTime();
    const twoWeeks: number = new Date( +new Date() - 12096e5).getTime();

    if (creationDate < currentDate && creationDate >= twoWeeks) {
      this.renderer.setStyle(this.elRef.nativeElement.firstChild, 'border', '1px solid green');
      this.borderColor = 'green';
    } else if (creationDate > currentDate) {
      this.borderColor = 'blue';
    }
    this.renderer.setStyle(this.elRef.nativeElement.firstChild, 'border', `1px solid ${this.borderColor}`);
  }
}
