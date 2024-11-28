import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(),
    userName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerms: new FormControl()
  })

   formvalue: any;

   onSave() {
    this.formvalue = this.studentForm.value;
   }

}
