# Appium_Android_iOS
---------------------
**Appium 2.x Installation checklist**
> 1. Node.js [https://nodejs.org/en]

LTS version > 16.x 

> 2. Appium Server : Appium CLI is the only option since April 2023.
```
npm install -g appium@next
```
> 3. Appium Driver :  IOS and Android real device drivers. Espresso for Android native driver and Mac2 for Mac OS are optional.
> XCUITest for IOS
> UiAutomator2 for Android

```
appium driver install xcuitest
appium driver install uiautomator2
```
> (O) 4. Appium Inspector [https://inspector.appiumpro.com/]
Web based interface
Alternative -> Appium Inspector Application [https://github.com/appium/appium-inspector] 

> 5. Real Devices : Android and IOS
Android Studio

**Run Android or IOS tests -** 

If running from the testNG.xml file, then any of theses section is mandatory to redirect tests on Android or IOS
```
<parameter name="platform" value="findBy.android"/>
or  
<parameter name="platform" value="findBy.ios"/>
```

The testng.xml will trigger the TestListener class implemented methods for Driver instantiation

