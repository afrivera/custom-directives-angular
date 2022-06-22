import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent {

  myColor: string = 'green';
  text1: string = 'Andres';

  myForm: FormGroup= this.fb.group({
    name: ['', Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  hasError( field: string ){
    return this.myForm.get(field)?.invalid || false;
  }

  changeName(){
    this.text1 = Math.random().toString();
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.myColor = color;
  }

}
