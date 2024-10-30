# React + Vite with Jest Testing

## Steps to Recreate this Repo

1. Create vite react template
1. `cd` into your new Vite React app and `git init` to create a `git` repo
1. Install dependencies: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react babel-jest jest-environment-jsdom identity-obj-proxy`
1. Create Babel config **in project root**: `touch babel.config.cjs` (NOTE: this file uses **.cjs** to denote that it is a CommonJS module, otherwise Vite will throw an error when it tries to treat it as ES module syntax)
1. Setup Babel config:
```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```
1. Create a `__mocks__` directory **in project root**: `mkdir __mocks__`
1. Create simple SVG Transformer **in the `__mocks__` directory**: `touch svgTransform.js` (this makes it so SVGs don't mess with Jest, we will use it in the next steps)
1. Setup `svgTransform.js`:
```js
module.exports = {
  process() {
    return { code: "module.exports = {};" };
  },
  getCacheKey() {
    return "svgTransform";
  },
};

```
1. Create Jest config **in project root**: `touch jest.config.cjs` (NOTE: this file uses **.cjs** to denote that it is a CommonJS module, otherwise Vite will throw an error when it tries to treat it as ES module syntax)
1. Setup Jest config:
```js
{
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svgTransform.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
```
1. Create Jest setup file in project root: `touch jest.setup.js`
1. Setup Jest setup file to:
```js
import "@testing-library/jest-dom/";
```
1. Add `test` script to scripts in your `package.json`:
```json 
"scripts": {
   ...
    "test": "jest --watchAll"
  },
```
1. Create `tests` directory (if desired)
1. Create your first test (follow traditional Jest naming specifications)