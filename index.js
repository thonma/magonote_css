const sass = require('sass');
const fs = require('fs');

const INPUT_PATH = './src/style.scss';
const OUTPUT_PATH = './dist/magonote.css';
const OUTPUT_PATH_MINIFY = './dist/magonote.min.css';

// =================================
// Compile
// =================================
const compiledCss = sass.compile(INPUT_PATH, {
  style: 'expanded',
});
const compiledMinCss = sass.compile(INPUT_PATH, {
  style: 'compressed',
});

// =================================
// Output
// =================================
const outputOptions = {
  encoding: 'utf-8',
};
const outputCallback = (err) => { err ? console.error(err) : null; };
fs.writeFile(OUTPUT_PATH, compiledCss.css, outputOptions, outputCallback);
fs.writeFile(OUTPUT_PATH_MINIFY, compiledMinCss.css, outputOptions, outputCallback);
