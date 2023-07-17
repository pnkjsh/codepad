
# BrowserStack Integration - Android & IOS Example

This project has been created to demonstrate how BrowserStack Real devices can be conencted and tested.
- - - 
## General System Requirements

#### Node JS

#### BrowserStack App Automate 

* Create a new account
* Use the "App Automate" services
* Upload the application (Android/iOS) and get the ID starts with "bs://....."
* We need user_name and access_key
* We need wdio browserstack server. Thats all.

``` npm install @wdio/browserstack-service
```
* Add user name, access key in the config file
* Set device name, version etc. based on BroswerStack provided devices
* Run the application 
``` npm start
```

bs://54bab74f25beececfb2e5be8bc67619e677c723e

npx wdio examples/run-sample-test/test.conf.js