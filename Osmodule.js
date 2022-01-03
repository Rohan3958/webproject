const { constants } = require('crypto');
const os = require('os');
const { pid } = require('process');
//console.log(os.arch());
//console.log(os.cpus());
//console.log(os.constants);
//console.log(os.devNull);
console.log(os.endianness());
console.log(os.freemem);
console.log(os.getPriority(pid));
console.log(os.homedir());
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.version())
