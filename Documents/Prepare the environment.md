Steps to prepare the environment:
1. Install node.js & npm
2. Install protractor `npm install –g protractor`
3. Install git (currently not needed)
4. `npm install selenium-webdriver` - install WebDriverJs

5. `npm init` - initiating package.json
6. Add dependeny to package.json
```js
      "dependencies": {
        "selenium-webdriver": "~2.40.0"
      }
```
7. `npm update` - adding dependencies
8. `webdriver-manager update` - installing selenium standalone server and chromedriver
9. `webdriver-manager start` - starting selenium standalone server