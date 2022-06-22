import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent {

  myForm: FormGroup= this.fb.group({
    name: ['', Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  hasError( field: string ){
    return this.myForm.get(field)?.invalid || false;
  }

}
