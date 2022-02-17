# react-redux-typescript boilerplate and tutorial

This tutorial introduces a simple boilerplate featuring a community opinionated stack including:

* Typescript
* React
* Redux
* Redux-toolkit
* Testing library
* Eslint
* Webpack


Practical examples of small apps, easy to read and write have been included to allow better understanding on how the whole stack works. The tutorial is divided into parts to introduce concepts gradually. To follow the tutorial, start from branch `lv0-starterKit` and move along by switching branches

## Part 1
### Branch: lv0-starterKit

A `Hello world` app that accepts your name as a param.

#### Key concepts:

* Redux toolkit app structure convention
* Redux store and slice of state
* Defining reducers and actions
* Accessing state and dispatching actions from components
* Introducing unit tests

## Part 2
### Branch: lv1-solverApp

A `solverApp` for solving quadratic equations

#### Key concepts:
* Extending the app by adding new features 
* Combining reducers from multiple features

## Part 3
### Branch: lv2-solverAppAsync

Extension of the `solverApp` from Part 2 introducing asynchronous requests. 

#### Key concepts:
* Using redux-toolkit helpers to handle asynchronous requests
* Introduce `extraReducers` in state slice
* Utilizing `pending`, `resolved` and `rejected` promise states in components

## Part 4
### Branch: lv3-countriesListApp

A `CountriesList` app displaying simple country information (name, capital and flag) retrieved from external data source

#### Key concepts:
* Use the knowledge on how to handle async requests from Part 3 to perform api calls
* Handle network errors

## Part 5
### Branch: lv4-provinceListApp

A `ProvinceList` app displaying province/states/regions for selected country.
Uses `CountriesList` app from Part 4 as a country selector
Both apps are displayed together

Key concepts:
* Interaction between applications
* Use effect hook to trigger re-render

# Installation
## Running dev server locally

```
npm install
npm start
```

## Running with docker

```
docker compose up
```

# Optional extra feature
### Branch: lv5-countriesMicroFrontends

A basic micro frontend setup based on Module Federation from webpack

`CountriesList` from Part 4 and `ProvinceList` from Part 5 are splitted into two separate apps.

`ProvinceList` is refactored to be exposable as a Module Federation micro frontend.

`CountriesList` is adjusted to be able to consume Module Federation micro frontends.

Both apps are displayed on one screen in the same way as in Part 5
