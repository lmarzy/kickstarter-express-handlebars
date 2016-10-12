# kickstarter-express-handlebars
Kickstarter for an Express app using Handlebars for templating

##dependencies
express express-handlebars morgan node-inspector nodemon

##devDependencies
babel-core babel-loader babel-preset-es2015 copy-webpack-plugin css-loader eslint eslint-loader extract-text-webpack-plugin postcss-loader sass-loader style-loader tap-spec tape webpack

##scripts
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
