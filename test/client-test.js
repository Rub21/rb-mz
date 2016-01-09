var test = require('tape');
var tvmaze = require('../');

test('Should create a client', function(t){
  t.ok(tvmaze.createClient, 'Should exist');// este objeto tiene que existir
  t.equals(typeof tvmaze.createClient, 'function', 'Should be a function');//este objeto tiene que ser un funcion
  t.end();  
});

