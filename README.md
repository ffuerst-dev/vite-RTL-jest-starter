# React + Vite with Jest Testing

### Vite with Jest requires these additional dependencies:
- **jest**: testing framework
- **@testing-library/react**: provides utilities for testing React components with simulated user interaction
- **@testing-library/jest-dom**: provides custom matchers for Jest that allows testing DOM node states
- **@babel/preset-env**: Babel preset that compiles "fancy" modern JS down to "standard JS" (in order to be compatible with older browsers)
- **@babel/preset-react**: Babel preset specifically for compiling React-specific code, such as JSX
- **babel-jest**: Jest transformer that uses Babel to compile JS (this allows Jest to 'understand' JSX and ESM syntax)
- **jest-environment-jsdom**: Jest environment that simulates a browser-like environment using jsdom, allowing the DOM to be tested in a Node environment (i.e. without a browser)
- **identity-obj-proxy**: a proxy for CSS modules that allows Jest to mock CSS imports as plain objects, making it easier to test components without loading styles (this prevents errors - you can turn it off in `jest.config.cjs` if you're curious what these errors look like)

# Steps to Recreate this Repo

1. Create vite react template: 
```bash
npx create-vite@latest my-react-app --template react
```
2. Navigate into your new Vite React app with `cd` and run `git init` to create a `git` repo
3. Install the dependencies: 
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react babel-jest jest-environment-jsdom identity-obj-proxy
```
4. Create Babel config **in project root**: 
```bash 
touch babel.config.cjs
``` 
> NOTE: this file uses **.cjs** to denote that it is a CommonJS module, otherwise Vite will throw an error when it tries to treat it as ES module syntax
5. Setup Babel config:
```js
//babel.config.cjs
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```
6. Create a `__mocks__` directory **in project root**: 
```bash
mkdir __mocks__
```
7. Create simple SVG Transformer **in the `__mocks__` directory**: 
```bash
touch svgTransform.js
```
> Note: this makes it so that SVGs (a common image type) don't mess with Jest's tests - we will integrate it in the upcoming steps
8. Setup `svgTransform.js`:
```js
//svgTransform.js
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
//jest.config.cjs
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
> Note: this tells jest how to transform certain sorts of code and modules, as well as what to do after the testing environment is setup (in this case, run the jest setup file that we're about to create)
11. Create Jest setup file in project root: 
```bash
touch jest.setup.js
```
12. Setup Jest setup file:
```js
// jest.setup.js
import "@testing-library/jest-dom/";
```
> Note: this makes it so we can use the Testing Library methods in Jest tests
13. Add `test` script to the other scripts in existing `package.json`:
```json 
//package.json
...
"scripts": {
   ...
    "test": "jest --watchAll"
  },
...
```
14. Create `tests` directory (if desired)
15. Create your first test (follow traditional Jest naming specifications)

#### Note that the basic Vite React app has been altered slightly (some elements changed/rearranged in `App.jsx`) to allow the tests shown in `App.test.js` to be more specific