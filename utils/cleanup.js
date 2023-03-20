import * as fs from 'fs';
import * as path from 'path';

// get the file path of the JS file in './dist/_astro'
const dirPath = './dist/_astro/';
const files = fs.readdirSync(dirPath);
const jsFile = files.find(file => path.extname(file) === '.js');
const filePath = path.join(dirPath, jsFile);

console.log('Cleaning up file:', filePath);

// read the contents of the file
const fileContent = fs.readFileSync(filePath, 'utf8');

// extract the removed content and write it to licenses.txt
const removedContent = fileContent.match(/\/\*\*[\s\S]*?\*\//g).join('\n');
const licensesFilePath = path.join(dirPath, '../licenses.txt');
fs.writeFileSync(licensesFilePath, removedContent, 'utf8');

// remove all content that starts from `/**` and ends with `*/`
const modifiedContent = fileContent.replace(/\/\*\*[\s\S]*?\*\//g, '');

// write the modified content back to the file with a comment at the beginning
const comment = `// Licenses can be found in licenses.txt\n`;
fs.writeFileSync(filePath, comment + modifiedContent, 'utf8');