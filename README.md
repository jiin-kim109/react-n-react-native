# Act-App

React and React Native packages for mobile and web app development
  

## Description

A multi-platform application made of multiple yarn packages that contain common code sharing between React and React Native components

- packages/web (React.js web app)  
- packages/app (React Native app)  
- packages/common (Code sharing between web and app)  
  
The packages are managed by Lerna.js  
  
## Deploy  
  
### App  
  
### Web App  
  
## Installation
  
1. Clone project  

```
git clone https://github.com/benawad/fullstack-graphql-airbnb-clone.git
```
  
2. Download dependencies  
   
At the root directory, type the command to download the dependencies of all package.jsons  
```
yarn
```
  
## Yarn Commands
  
1. Run the application in dev
  
- React web app  
    
```
yarn start:web  
```
  
- React Native app    
  
The command will open expo dev server (default=localhost:19002)  
```
yarn start:app  
```
  
2. Build the application
  
- React web app   
  
```
yarn build:web    
```
  
- React Native app    
  
build .apk or .app-bundle for Android  
```  
yarn build:app:android
```  
build .ipa for iOS  
  
4. Testing  
  
* Test common components & controller  
  
```
cd packages  
cd common  
yarn jest  
```

## Reference
  
### React Native for Web  
https://github.com/necolas/react-native-web    
(docs) http://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page  
  
### Writing a common UI component   
https://codesandbox.io/s/q4qymyp2l6?file=/src/App.js:2971-2980  
  
### DI Between React and React Native  
(typeId)  
https://github.com/typestack/typedi   
  
(examples)  
https://gist.github.com/NoMoreViolence/caa333599b60a49bc0a2231ad82f777d#file-audioserviceinterface-ts       
https://gist.github.com/NoMoreViolence/622bee22797dfd67880ac0ba28130368  
https://gist.github.com/NoMoreViolence/88129471160137a9c477eb4dd6eab869  
  
### How to import files outside React Native root directory  
(metro bundler)  
https://medium.com/@dushyant_db/how-to-import-files-from-outside-of-root-directory-with-react-native-metro-bundler-18207a348427  

