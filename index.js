const sass = require('sass');
const fs = require('fs');

// =================================
// Read style.scss
// =================================
let src = fs.readFileSync('./src/style.scss', 'utf-8');

// =================================
// Some task
// =================================
// JSでしかできないことがあればここに書くつもり

// =================================
// Compile
// =================================
const compiledCss = sass.compileString(src, {
  style: 'compressed', // minify
  importers: [{
    canonicalize(url) {
      return new URL(`${url}:./src/_${url}.scss`);
    },
    load(canonicalUrl) {
      return {
        contents: fs.readFileSync(canonicalUrl.pathname, 'utf-8'),
        syntax: 'scss'
      };
    }
  }]
});

// =================================
// Output
// =================================
const outputFilepath = './dist/magonote.min.css';
fs.writeFileSync(outputFilepath, compiledCss.css, {
  encoding: 'utf-8',
});
console.log(`Write ${outputFilepath}`);