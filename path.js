const path = require('path')
const absolutePath = path.resolve('Nauhith', 'ejs-api-table', 'file.txt');
console.log(absolutePath);  // Output: (absolute path to file.txt)
console.log(path.isAbsolute('/Nauhith/file.txt'));  // Output: true
console.log(path.isAbsolute('Nauhith/file.txt'));  // Output: false
const filePath = '/Nauhith/ejs-api-table/file.txt';

console.log(path.basename(filePath));  // Output: 'file.txt'
console.log(path.basename(filePath, '.txt'));  // Output: 'file' (removes extension)

console.log(path.dirname(filePath));  // Output: '/folder/subfolder'

console.log(path.extname(filePath));  // Output: '.txt'
