const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')({
  preset: 'default',
});

// @ts-ignore
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./components/**/*.js', './pages/**/*.js'],

  // Include any special characters being used in your css
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./src/app/tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
    require('postcss-preset-env'),
  ],
};
