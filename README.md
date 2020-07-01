 # Webpack, eslint, react, atomic, redux, i18n, auth by API, material-UI, PWA
## A boiler plate with functions separate by branch with a simple functional webpack, eslint, Atomic Design Methodology pattern  schema, react configuration, redux, i18n (Internationalization multi language), service worker, PWA(Progressive Web Application), SPA, Auth by API

### Description of each dependency

|PACKAGE|VERSION|DESCRIPTION|
|----------------|-------------------------------|-----------------------------|
|"@babel/core"|`"^7.10.2"`            |'All Babel dependency to use with webpack' |
|"@babel/plugin-proposal-class-properties"|`"^7.10.1"`            |'This plugin transforms the static class properties as well as the properties declared with the property initializer syntax'|
|"@babel-polyfill"|`"^7.10.1"`            |'allows you to use the full set of ES6 functions beyond syntax changes. This includes features such as new built-in objects like Promises and WeakMap.'|
|"@babel/preset-env"|`"^7.10.2"`|'is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!'|
|"@babel/preset-react"|`"^7.10.1"`            |'This preset always includes the following plugins: <br /> @babel/plugin-syntax-jsx <br /> @babel/plugin-transform-react-jsx <br /> @babel/plugin-transform-react-display-name'|
|"babel-loader"|`"^8.1.0"`            |'This package allows transpiling JavaScript files using Babel and webpack.|
|"css-loader"|`"^3.5.3"`            |The css-loader interprets @import and url() like import/require() and will resolve them.|
|"html-webpack-plugin"|  `"^4.3.0"` | To process html file, The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.  |
|"mini-css-extract-plugin"|`"^0.9.0"`|This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.|
|"react"| `"^16.13.1"` | react Core |
|"react-dom" |`"^16.13.1"`| The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.|
|"style-loader": |`"^1.2.1"`| Inject CSS into the DOM |
|"webpack-cli"| `"^3.3.11"` |For proper usage and easy distribution of this configuration, webpack can be configured with webpack.config.js|
|"webpack" | `"^4.43.0"`|Core of Webpack|
|"webpack-dev-server": | `"^3.11.0"`| to deploy server dev in browser and livereload    |
|"eslint": | `"^7.3.1"`| Eslint core    |
|"eslint-loader": | `"^4.0.2"`| A ESlint loader for webpack   |
|"eslint-plugin-react": | `"^7.20.0"`| React specific linting rules for ESLint    |
|"eslint-config-prettier": | `"^6.11.0"`| Turns off all rules that are unnecessary or might conflict with Prettier.    |
|"eslint-plugin-prettier": | `"^3.1.4"`| Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.    |
|"prettier": | `"2.0.5"`| Prettier is an opinionated code formatter.    |
|"babel-eslint": | `"^10.1.0"`| babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.   |
    
### Description of boiler plate by function

![mermaid-diagram](https://raw.githubusercontent.com/oteroweb/webpack-react-atomic-redux-i18n-auth-material-UI-PWA/master/mermaid-diagram-20200623053245.svg)
