import * as fs from 'fs';
import * as path from 'path';

// get the directory path containing the JS files
const dirPath = './dist/_astro/';

// get all JS files in the directory
const files = fs.readdirSync(dirPath).filter(file => path.extname(file) === '.js');

// iterate over each file and perform cleanup
files.forEach((file) => {
  const filePath = path.join(dirPath, file);

  // console log cleanup process
  console.log(`[${new Date().toLocaleTimeString()}] \x1b[34mCleaning up file:\x1b[0m ${filePath}`);

  // read the contents of the file
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // extract the removed content and write it to licenses.txt
  const removedContent = fileContent.match(/\/\*\*[\s\S]*?\*\//g).join('\n');
  const licensesFilePath = path.join(dirPath, '../licenses.txt');
  fs.writeFileSync(licensesFilePath, fileContent, { flag: 'a' });

  // remove all content that starts from `/**` and ends with `*/`
  const modifiedContent = fileContent.replace(/\/\*\*[\s\S]*?\*\//g, '');

  // write the modified content back to the file with a comment at the beginning
  const comment = `// Licenses can be found in licenses.txt\n`;
  fs.writeFileSync(filePath, comment + modifiedContent, 'utf8');
});

// console log completion message
console.log(`[${new Date().toLocaleTimeString()}] \x1b[32mCleanup completed successfully.\x1b[0m`);
