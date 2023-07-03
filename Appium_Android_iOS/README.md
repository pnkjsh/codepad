# Appium_Android_iOS
-------------------
**Run Android or IOS tests -** 

If running from the testNG.xml file, then any of theses section is mandatory to redirect tests on Android or IOS
```
<parameter name="platform" value="findBy.android"/>
or  
<parameter name="platform" value="findBy.ios"/>
```

The testng.xml will trigger the TestListener class implemented methods for Driver instantiation

