


# Install selenium standalone server


## Option: selenium-standalone
It will install a selenium-standalone command line that will be able to install selenium server and start firefox, chrome, internet explorer or phantomjs for your tests.

Install selenium standalone with
```
npm install -g selenium-standalone@latest
```

Install the selenium version with
```
selenium-standalone install --version=2.43.1
```
*Version 2.44 has issues. Use 2.43.1*

Open a new terminal and run
```
selenium-standalone start --version=2.43.1
```

There is no need to install phantomjs.


## Option: downloading the jar
Check the actual version at http://www.seleniumhq.org/download/

Replace the version number with the actual version you have found on the site.

Download selenium

`wget http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar`

Open a new terminal and run the webdriver / selenium hubs
```
java -jar selenium-server-standalone-2.44.0.jar -role hub
```

# Install phantomjs

Install phantomjs with `sudo npm install -g phantomjs`.

Open a new terminal and run phantomjs with
```
phantomjs --webdriver=4445 --webdriver-selenium-grid-hub=http://127.0.0.1:4444
```  (Port numbers are default.)



*Note: You cannot use `should` with `protractor`. See https://github.com/angular/protractor/issues/633*

---


### Install protractor global with
```
npm install -g protractor
```

### Run test
```
npm test
```

### References
- http://angularjs.org
- http://angular.github.io/protractor
- http://jasmine.github.io
