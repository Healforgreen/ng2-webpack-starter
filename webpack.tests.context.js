//make sure you have your directory and regex test set correctly!
var context = require.context('./src', true, /.spec\.ts$/);
context.keys().forEach(context);