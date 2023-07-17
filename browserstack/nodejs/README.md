
# BrowserStack Integration - Android & IOS

This project has been created to demonstrate how BrowserStack Real devices can be conencted and tested.
- - - 
## General System Requirements

#### Node JS
Download node.js latest version

#### BrowserStack App Automate 

* Create a new account
* Use the "App Automate" services
* Upload the application (Android/iOS) and get the ID starts with "bs://....."
* We need user_name and access_key
* We need wdio browserstack server. Thats all.

``` 
    npm install @wdio/browserstack-service
```
* Add user name, access key in the config file
* Set device name, version etc. based on BroswerStack provided devices
* Run the application 
``` 
    npm start
```
