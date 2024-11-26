import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DynamicFormComponent } from './app/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  imports: [DynamicFormComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

  <app-dynamic-form></app-dynamic-form> <!-- Use DynamicFormComponent here -->
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
