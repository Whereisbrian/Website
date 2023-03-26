import * as fs from 'fs';
import * as path from 'path';

// get the directory path containing the JS files
const assetsPath = './public/assets';
const postsPath = './src/content/posts';


// get all files in the directory
const files = fs.readdirSync(assetsPath);

// Copy all files to a new directory
const newAssetsPath = './src/assets';

files.forEach((file) => {
// create the source and destination paths
const srcPath = path.join(assetsPath, file);
const destPath = path.join(newAssetsPath, file);

// read the content of the source file
const fileContent = fs.readFileSync(srcPath);

// write the content of the source file to the destination file
fs.writeFileSync(destPath, fileContent);
console.log(`File ${file} has been copied successfully.`);
});

console.log('All assets have been copied successfully.');

// read all files in the directory
fs.readdir(postsPath, (err, files) => {
    if (err) throw err;
  
    // iterate through all files
    files.forEach(file => {
      const filePath = path.join(postsPath, file);
  
      // check if the file is a markdown file
      if (path.extname(filePath) === '.md') {
        // read the file contents
        const fileContent = fs.readFileSync(filePath, 'utf-8');
  
        // replace all occurrences of '/assets/' with '../../assets'
        const newContent = fileContent.replace(/\/assets\//g, '../../assets/');
  
        // write the updated content back to the file
        fs.writeFileSync(filePath, newContent, 'utf-8');
      }
    });
});

console.log('All posts have been updated successfully.');