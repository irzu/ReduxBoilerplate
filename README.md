# redux-toolkit tutorial based on vite-react boilerplate

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

* Typescript
* React
* Redux
* Redux-toolkit
* Testing library
* Eslint
* Vite

Practical examples of small apps, easy to read and write have been included to allow better understanding on how the whole stack works. The tutorial is divided into parts to introduce concepts gradually. To follow the tutorial, start from branch `chapter1-HelloWorld` and move along by switching branches

## Part 1
### Branch: `chapter1-HelloWorld`

Hello world app that accepts your name as a param.

#### Key concepts:

* Redux toolkit app structure convention
* Redux store and slice of state
* Defining reducers and actions
* Accessing state and dispatching actions from components
* Introducing unit tests

## Part 2
### Branch: `chapter2-EquationSolver`

Simple quadratic equations solver

#### Key concepts:
* Extending the app by adding new features 
* Combining reducers from multiple features

## Part 3
### Branch: `chapter3-EquationSolverAsync`

Extension of the quadratic equations solver from Part 2 introducing asynchronous requests. 

#### Key concepts:
* Using redux-toolkit helpers to handle asynchronous requests
* Introduce `extraReducers` in state slice
* Utilizing `pending`, `resolved` and `rejected` promise states in components

## Part 4
### Branch: `chapter4-CountriesList`

An app displaying simple country information (name, capital and flag) retrieved from external data source

#### Key concepts:
* Use the knowledge on how to handle async requests from Part 3 to perform api calls
* Handle network errors

# Installation
## Running dev server locally

```
npm install
npm start
```
