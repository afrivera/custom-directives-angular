import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit{

  htlmElement: ElementRef<HTMLElement>
  @Input() color: string = 'red';
  @Input() message: string = 'this field is required';

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htlmElement = this.el;
  }
  ngOnInit(): void {
    console.log('onInit directive');
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor():void {
    this.htlmElement.nativeElement.style.color = this.color;
  }

  setMessage():void {
    this.htlmElement.nativeElement.innerText = this.message;
  }

  setClass():void {
    this.htlmElement.nativeElement.classList.add('form-text')
  }

}
