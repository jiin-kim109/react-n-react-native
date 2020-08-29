# Act-R-Rn

React and React Native packages for mobile and web app development
  

## Description

A multi-platform application made of multiple yarn packages that contain common code sharing between React and React Native components

- web (React.js web app)  
- app (React Native app)  
- common (Code and components shared between web, and app)  
  
The packages are managed by Lerna.js  
  
## Installation
  
1. Clone project  

```
git clone https://github.com/benawad/fullstack-graphql-airbnb-clone.git
```
  
2. Download dependencies  
   
At the root directory, type the command below to download the dependencies for all package.jsons  
```
yarn
```
  
3. Start the application  
  
* React web app
    
The following command we'll open expo dev server.    
```
yarn build:web  
```
* React Native app
```
yarn build:app  
```
  
4. Testing  
  
* Test common  
  
```
cd packages  
cd common  
yarn jest  
```
  
## Usage

1. Start server `yarn start` in `packages/server`

2. Now you can run `yarn start` in `packages/web` or `packages/app` to start the website or app.

3. How to get credentials working in graphql playground: https://youtu.be/oM-EmNdhwI4?t=8m39s

## Deploy

### App

### Web App

## Features

