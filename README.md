# Voluble chat application

## Synopsis

pending...

## Initial setup

  * install [node](http://nodejs.org/) version 0.6 ([download](http://nodejs.org/#download)) with [npm](http://npmjs.org/)
  * cd Voluble
  * `npm install`
  * `npm install jake -g`
  * check settings in config/*.js (depends on your NODE_ENV(default 'development') )
  * `jake -T` to list all available tasks
  * check first line of node_modules/everyauth/lib/utils.js, in npm version of package there is no ``var`` before tls variable(on github master it's fixed). Since mocha checks for global variables leak - tests will fail if there is no `var`


## Run application
in development enviroment:
```node index.js```

## Run tests
```npm test```
## Deployng

pending...