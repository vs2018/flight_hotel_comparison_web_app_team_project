const express = require('express');
const server  = express();
const parser  = require('body-parser');

server.use(parser.json());
server.use(express.static(`${__dirname}/build`));
server.use(parser.urlencoded({extended: true}));

server.listen(3000, function(){
  console.log(`Server listening on port ${this.address().port}`);
})