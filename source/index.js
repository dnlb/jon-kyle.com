var html = require('choo/html')
var css = require('sheetify')
var choo = require('choo')
var app = choo()

css('./design/index.js')

// plugins
app.use(require('enoki/choo')())
app.use(require('./plugins/scroll'))

// routes
app.route('*', require('./views/wrapper'))

// public
module.exports = app.mount('body')
