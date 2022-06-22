import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _message: string = 'this field is required';

  htlmElement: ElementRef<HTMLElement>
  // @Input() message: string = 'this field is required';
  
  @Input() set color (value: string ){
    this._color = value;
    this.setColor();
  }

  @Input() set valid( value: boolean ){
    if( value ){
      this.htlmElement.nativeElement.classList.add('hidden');
    } else {
      this.htlmElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input() set message( value: string ){
    this._message = value;
    this.setMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htlmElement = this.el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if( changes['message'] ){
    //   const message = changes['message']?.currentValue;
    //   this.htlmElement.nativeElement.innerText = message;
    // }
    // if( changes['color'] ){
    //   const color = changes['color']?.currentValue;
    //   this.htlmElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }
  ngOnInit(): void {
    // console.log(this.color); // undefined
    // console.log(this.message); // undefined

    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor():void {
    this.htlmElement.nativeElement.style.color = this._color;
  }

  setMessage():void {
    this.htlmElement.nativeElement.innerText = this._message;
  }

  setClass():void {
    this.htlmElement.nativeElement.classList.add('form-text')
  }

}
