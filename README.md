# RSSReader

## Introduction
A basic RSS reader which displays posts within RSS feeds.

The user can add, remove and filter RSS feeds, which are sorted by date.

## Stack
This application is built with ES6 Javascript transpiled with babel and bundled with webpack. It uses React as its component library.

Styling is done with scss, utilising the `sass-loader`, `css-loader` and `style-loader` plugins for webpack. These are configured to generate unique hashes per CSS class to prevent accidental use of other classes in unrelated components.

Testing is done with Jest and enzyme.

## Prerequisites
1. `yarn` - ensure you have yarn installed (npm will also work)

## Running
To run, simply run `yarn ENVIRONMENT`, where `ENVIRONMENT` is either `dev` or `production`  and then go to `localhost:8080` on your preferred browser

## Building
To build run `yarn build:ENVIRONMENT`, where `ENVIRONMENT` is either `dev` or `production`

## Tests
To run unit tests run `yarn coverage`. This will display a coverage of the codebase.

### Main Resources
- React: https://github.com/facebook/react
- react-dom: 
- Redux: https://github.com/reduxjs/redux
- react-redux: https://github.com/reduxjs/react-redux
- spbarker/re-qwest: https://github.com/spbarker/re-qwest
- debounce: https://github.com/component/debounce
- prop-types: https://github.com/facebook/prop-types
- babel: https://github.com/babel/babel
- css-loader: https://github.com/webpack-contrib/css-loader
- enzyme: https://github.com/airbnb/enzyme
- fetch-mock: https://github.com/wheresrhys/fetch-mock
- html-webpack-plugin: https://github.com/jantimon/html-webpack-plugin
- jest: https://github.com/facebook/jest
- node-sass: https://github.com/sass/node-sass
- redux-mock-store: https://github.com/arnaudbenard/redux-mock-store
- sass-loader: https://github.com/webpack-contrib/sass-loader
- standard: https://github.com/standard/standard
- style-loader: https://github.com/webpack-contrib/style-loader
- webpack: https://github.com/webpack
- webpack-dev-server: https://github.com/webpack/webpack-dev-server

