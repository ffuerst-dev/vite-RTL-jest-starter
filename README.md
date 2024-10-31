# React + Vite with Jest Testing

## Steps to Recreate this Repo

1. Create vite react template
2. `cd` into your new Vite React app and `git init` to create a `git` repo
3. Install dependencies: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react babel-jest jest-environment-jsdom identity-obj-proxy`
4. Create Babel config **in project root**: `touch babel.config.cjs` 
> NOTE: this file uses **.cjs** to denote that it is a CommonJS module, otherwise Vite will throw an error when it tries to treat it as ES module syntax
5. Setup Babel config:
```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```
6. Create a `__mocks__` directory **in project root**: `mkdir __mocks__`
7. Create simple SVG Transformer **in the `__mocks__` directory**: `touch svgTransform.js` (this makes it so SVGs don't mess with Jest, we will use it in the next steps)
8. Setup `svgTransform.js`:
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
9. Create Jest config **in project root**: `touch jest.config.cjs` 
> NOTE: this file uses **.cjs** to denote that it is a CommonJS module, otherwise Vite will throw an error when it tries to treat it as ES module syntax
10. Setup Jest config:
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
11. Create Jest setup file in project root: `touch jest.setup.js`
12. Setup Jest setup file to:
```js
import "@testing-library/jest-dom/";
```
13. Add `test` script to scripts in your `package.json`:
```json 
"scripts": {
   ...
    "test": "jest --watchAll"
  },
```
14. Create `tests` directory (if desired)
15. Create your first test (follow traditional Jest naming specifications)

> Note that the basic Vite React app has been altered slightly (some elements changed in `App.jsx`) to allow the tests shown in `App.test.js` to be more specific