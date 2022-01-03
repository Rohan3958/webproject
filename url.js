import url from 'url';
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = 'blockchain';
myURL.hash = 'rohan';
console.log(myURL)
console.log(myURL.herf)