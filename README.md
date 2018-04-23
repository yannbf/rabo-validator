# Rabo Validator
This project was created as a challenge for Rabobank. It's a validator for transaction records that are provided either as CSV or XML.

For test data, check assets/sample to get a .CSV and .XML file.
If you just want to see how the application looks like, check the assets/screens folder in this repo, or check the live demo here: https://rabo-validator.firebaseapp.com

## Project Features
* Preprocessor: SASS. Chosen because it's way better than CSS, as you have superpowers like @import, color functions, variables, and so on.

* Framework: Angular5. Angular is a powerful framework that is built with a reactive way of thinking. Working with RxJS is incredible and provides many possibilities. Angular comes with typescript, which is great to be adopted in large projects, not only giving great autocompletion and access to documentation, but also enhancing the development process and greatly reducing errors before they ever get the chance to happen.

* Unit Tests with Jasmine and Karma. I unfortunately didn't do as much on tests as I would like, as time was not in favor. I will eventually add more coverage. There are also components with private scoped functions which would require E2E test and it's something I would have eventually done.

* Prettier for a better standardized code.

* TSLINT and SASSLINT to enforce rules for better development and readability of the produced code.

* Husky + LintStaged + Git hooks: precommit for running linters and prettier, prepush for doing unit tests.

* Uses materialize to follow google material design standards.

* Responsive application.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
