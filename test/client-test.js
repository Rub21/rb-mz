var test = require('tape');
var tvmaze = require('../');
var Client = require('../lib/client');

test('Should create a client', function(t){
  t.ok(tvmaze.createClient, 'Should exist');// este objeto tiene que existir
  t.equals(typeof tvmaze.createClient, 'function', 'Should be a function');//este objeto tiene que ser un funcion
  var client = tvmaze.createClient();
  t.ok(client instanceof Client, 'Should be instance of client');
  t.end();  
});


