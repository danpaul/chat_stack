## About
Simple chat server and client using the following stack:
* jQuery
* SASS
* [Foundation](http://foundation.zurb.com/)
* [Browserify](http://browserify.org/)
* [React](https://facebook.github.io/react/)
* Express
* Socket.io

## To Setup

* Download and unzip this repo in the project directory
* cd to project root
* `npm install`

## To Run

Frontend development:
```
NODE_ENV=development gulp
```

Backend development (if you have [nodemon](https://github.com/remy/nodemon) installed):
```
NODE_ENV=development nodemon index.js
```
Without Nodemon:
```
NODE_ENV=development node index.js
```

Production:
```
NODE_ENV=production node index.js
```