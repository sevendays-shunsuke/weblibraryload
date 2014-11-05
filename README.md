# Web Library Load

## about
This is simple load for web library.

## how to use
### load this library
`<script type"text/javascript" src="./loadlib.js"></script>`

### use this library
`    
var loadlib = new loadlib();
loadlib.load("jquery");
loadlib.load("bootstrap","2.3");
`
### parameter
loadlib.load(`library name`,[`version`]);

if version is no selected, use for latest version.

## support library
jquery
bootstrap
