# Angular Signup September 2020

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Task

* Build a single page app with a sign-up form.
* The form should allow users to enter first name, last name, email, and password.
* All fields are required.
* Password validation:
    * Should be a minimum of eight characters,
    * Should contain lower and uppercase letters,
    * Should not contain user’s first or last name.
* Email should be validated but there are various ways of accomplishing this. So, show us what
you consider as a proper email validation.
* The form should send a POST request to https://demo-api.now.sh/users. The request body
example:
```
{
    firstName: "Thomas",
    lastName: "Shelby",
    email: "thomas@shelby.co.uk"
}
```

## Development server

Run `ng serve --open` for a dev server. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## TODO

Add tests:
- app.component.spec.ts

