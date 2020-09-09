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
   
At the root directory, type the command below to download the every assigned dependencies
```
yarn
```
  
## Yarn Commands
  
1. Run the application in dev
  
- React web app  
    
```
cd packages/web  
yarn start
```
  
- React Native app    
  
The command will open expo dev server (default=localhost:19002)  
```
cd packages/app  
expo start  
//or
./appstart.sh
```
  
2. Build the application
  
- React web app   
  
```
yarn build:web    
```
  
- React Native app    
  
.apk or .app-bundle for Android  
```  
yarn build:app:android
```  
.ipa for iOS  
```  
yarn build:app:ios
```  
  
4. Testing  
  
* Test common components & controller  
  
```
cd packages/controllers  
yarn jest  
```
  
## TODO  
- Add server package  

## Features
  
### React Native for Web
https://github.com/necolas/react-native-web  
  
(docs) http://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page  
  
### Importing RN-for-web components from web
https://codesandbox.io/s/q4qymyp2l6?file=/src/App.js:2971-2980  
  
### DI to support each platform's services
(typedi) https://github.com/typestack/typedi   
(docs) https://docs.typestack.community/typedi/v/develop/  
  
### Async events subscription
(PubSub) https://github.com/georapbox/PubSub  
  
### How to import files outside React Native root directory
(metro bundler)  
https://medium.com/@dushyant_db/how-to-import-files-from-outside-of-root-directory-with-react-native-metro-bundler-18207a348427  
   
### Monorepo using yarn Workspaces in Expo
(expo-yarn-workspaces) https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces  
  
### Swipe in React Native
(react-native swipe) https://github.com/leecade/react-native-swiper  
  
### Delete Navigation Stack History
https://github.com/react-navigation/react-navigation/issues/295  

### Mobx Serializr
https://github.com/mobxjs/serializr  

### AsyncStorage
https://github.com/react-native-community/async-storage
