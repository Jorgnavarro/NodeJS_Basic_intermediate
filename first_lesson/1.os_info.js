const os = require('node:os')

console.log('Operating system info:');
console.log('-------------------------------------');

console.log('Operating system name: ', os.platform());
console.log('Operating system version: ', os.release());
console.log('Operating system total memory: ', os.totalmem() / 1024/ 1024 );
console.log('Operating system available memory: ', os.freemem() / 1024/ 1024);
console.log('Architecture: ', os.arch());
console.log('CPUs: ', os.cpus());
console.log('Available on pc: ', os.uptime() /60 /60);