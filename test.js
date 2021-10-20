const path = require('path');
var Nightmare = require('nightmare');
var nightmare = Nightmare({
});

const start = new Date();
const selector = ".Price--amount"
nightmare
  .viewport(1300, 900)
  .goto('https://opensea.io/collection/lady-killaz?search[stringTraits][0][name]=Accessory&search[stringTraits][0][values][0]=LOL')
  .evaluate(selector => {
    // now we're executing inside the browser scope.
    return document.querySelector(selector).innerText
  }, selector) // <-- that's how you pass parameters from Node scope to browser scope
  .then(text => {
    console.log(text, new Date() - start)
  })