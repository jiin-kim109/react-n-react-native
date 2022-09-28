# Cross-Platform-Development-React-n-React-Native

A demo for a React and React Native cross development in a monorepo sturcture. Aiming to reduce workloads of web and mobile development by sharing the common components and hooks.

## Description

A cross-platform development with yarn-workspace. Upon the monorepo structure, React and React Native will share the common components and React Hooks. The folder structure is as follows,

- packages/web (React.js web app)  
- packages/app (React Native app)  
- packages/common (common hooks and componetns)   
  
### App  
  
### Web App  
  
## Installation
  
1. Clone project  

```
git clone https://github.com/jiin-kim109/Cross-Platform-Development-React-n-React-Native.git. 
```
  
2. Download dependencies  
   
Each packages/web and packages/app has its own dependencies under /packages/web/node_modules and /packages/app/node_modules. The common dependencies will be installed in the node_modules in the root of the project. However, Yo do not need to worry about installing packages separately. By typing yarn, the yarn-workspace will do it for you.

In the root folder, type the following command,
```
yarn
```

You can modify the package installation configuration in lerna.json.  
  
## Yarn Commands. 
  
1. To run the React web app  
    
```
cd packages/web  
yarn start
```
  
2. To run the React Native mobile app   
  
The command will open expo dev server (default=localhost:19002)  
```
cd packages/app  
expo start  
//or
./appstart.sh
```
  
3. To build the React web app    
```
yarn build:web    
```
  
4. To build the React Native mobile app    
  
.apk or .app-bundle for Android  
```  
yarn build:app:android
```  
.ipa for iOS  
```  
yarn build:app:ios
```  
  
4. Testing  
  
* Testing common components & controller  
  
```
cd packages/controllers  
yarn jest  
```
  
## TODO   
