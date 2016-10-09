# kickstarter-express-handlebars
Kickstarter for an Express app using Handlebars for templating

##dependencies
"express": "^4.14.0",
"express-handlebars": "^3.0.0",
"morgan": "^1.7.0",
"node-inspector": "^0.12.8",
"nodemon": "^1.10.0"

##devDependencies
"autoprefixer": "^6.4.1",
"babel-core": "^6.14.0",
"babel-loader": "^6.2.5",
"babel-preset-es2015": "^6.14.0",
"copy-webpack-plugin": "^3.0.1",
"css-loader": "^0.25.0",
"css-mqpacker": "^5.0.1",
"cssnano": "^3.7.5",
"eslint": "^3.5.0",
"eslint-loader": "^1.5.0",
"extract-text-webpack-plugin": "^1.0.1",
"node-sass": "^3.10.1",
"postcss-cli": "^2.6.0",
"postcss-focus": "^1.0.0",
"postcss-loader": "^0.13.0",
"postcss-pxtorem": "^3.3.1",
"postcss-vr": "^3.0.1",
"sass-loader": "^4.0.2",
"style-loader": "^0.13.1",
"tap-spec": "^4.1.1",
"tape": "^4.6.0",
"webpack": "^1.13.2"

##scripts
"scripts": {
  "clean": "rm -rf app/public/*",
  "test": "tape -r babel-register tests/*.js | tap-spec",
  "eslint:app": "eslint app/**/*.js",
  "start": "nodemon main",
  "inspector": "node-inspector",
  "debug": "nodemon --debug app/app.js",
  "webpackDev": "webpack --progress --colors --watch",
  "webpackProd": "webpack -p",
  "webpack:dev": "npm run clean && npm run webpackDev --progress --colors --watch",
  "webpack:prod": "npm run clean && npm run webpackProd -p"
},
