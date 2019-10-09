var b = new Buffer.alloc(16);

b = "Hello";

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer.alloc(64);
v = ('World').toString('base64');

console.log(b.toString('utf-8',0,2));