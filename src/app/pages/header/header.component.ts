import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  form = new FormGroup({
    number: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required,])
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }
}
