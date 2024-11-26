import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent {

  dynamicForm: FormGroup;

  // <!-- 1 Dynamic Template Driven Form Mehtod -->

	// usernames: string[] = [];

	// addUsername() {
	// 	this.usernames.push("");
	// }

	// removeUsername(index: number) {
	// 	this.usernames.splice(index, 1);
	// }

  // submitForm() {
	// 	console.log("usernames", this.usernames);
	// }



  // <!-- 2 Dynamic Reactive Form Method -->

	constructor(private fb: FormBuilder) {
		this.dynamicForm = this.fb.group({
			usernames: this.fb.array([]),
		});
	}

	get usernames(): FormArray {
		return this.dynamicForm.get("usernames") as FormArray;
	}

	addUsername() {
		this.usernames.push(this.fb.control("", Validators.required));
	}

	removeUsername(index: number) {
		this.usernames.removeAt(index);
	}

	submitForm() {
		console.log("Formvalid", this.dynamicForm.valid);
		console.log("Username", this.dynamicForm.value);
	}
}
