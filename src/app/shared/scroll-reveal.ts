import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollReveal implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add('revelado');
          this.observer.disconnect();
        }
      },
      {
        threshold: 0.15
      }
    );
    this.observer.observe(this.element.nativeElement);
  }
  
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}