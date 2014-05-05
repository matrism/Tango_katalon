##Prepare the environment

###Background:
1. Installed [node.js](http://nodejs.org/) with NPM and NPM is added to PATH Environment Variables.
2. Installed GitBash
3. Installed Java

###Step to prepare environment:
1. Open GitBash.
2. Navigate to your working directory
3. Run `git clone https://github.com/wmgdsp/factory-testing-framework.git` and enter your credentials
4. Go to factory-testing-framework/login_tests directory
5. Copy all files from this directory to your project directory.
6. Navigate to your project directory.
7. Install bower globally: `npm install -g bower`
8. Install protractor globally: `npm install -g protractor`
9. Check you have ssh to github. If no, use links: https://help.github.com/articles/generating-ssh-keys and maybe http://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent
10. Run `bower update`
11. Run `npm install`
12. Run `webdriver-manager update`
13. For using IE(only for Windows): download http://docs.seleniumhq.org/download/, Please make sure that this is available on your $PATH (or %PATH% on Windows) in order for the IE Driver to work as expected. (Maybe you should run next command: java -jar path\to\selenium-server-standalone-2.40.0.jar -Dwebdriver.ie.driver="path\to\IEDriverServer.exe")
14. Open one more Bash and run `webdriver-manager start` in it.
15. Update your Chrome browser if outdated.
16. Run `start.sh` to start default tests.


We recommend to use Jetbrains Webstorm or Oracle Netbeans IDE, but you are free to use any IDE that you like, even RubyMine.
