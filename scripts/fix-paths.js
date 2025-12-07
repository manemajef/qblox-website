const fs = require('fs');
const path = require('path');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix image src paths
  content = content.replace(/src="\/([^"]*\.(jpg|jpeg|png|gif|svg|webp|ico))"/gi, 'src="./$1"');

  // Fix href paths for favicon and other assets
  content = content.replace(/href="\/([^"]*\.(ico|png|jpg|jpeg|svg))"/gi, 'href="./$1"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed paths in: ${filePath}`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixPathsInFile(filePath);
    }
  });
}

const outDir = path.join(__dirname, '../out');
console.log('Fixing paths in HTML files...');
processDirectory(outDir);
console.log('Done!');
