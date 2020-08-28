# Act-R-Rn

A set of React and React Native packages for Act mobile and web development

- 

## Description

This multi-platform application is made of multiple yarn packages that contain code share between React and React Native components

- web (React.js web app)  
- app (React Native app)  
- common (Code and components shared between web, and app)  
  
The packages are manages with Lerna.js  
  
## Installation

1. Clone project

```
git clone https://github.com/benawad/fullstack-graphql-airbnb-clone.git
```

2. Download dependencies

```
cd act-r-rn
```
```
// act-r-rn/
cd fullstack-graphql-airbnb-clone
```
```
// act-r-rn/packages/app, act-r-rn/packages/web, act-r-rn/packages/common
yarn
```

3. Start the application

    * React web app
    The following code we'll open expo dev server  
    You may not see proper expo log in terminal, but as long as there's no errors appear it'll work as it is
    ```
    // act-r-rn/
    yarn build 
    ```
    * React Native app
    ```
    // act-r-rn/
    yarn build 
    ```

```
createdb graphql-ts-server-boilerplate
```

6. [Add a user](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) with the username `postgres` and and no password. (You can change what these values are in the [ormconfig.json](https://github.com/benawad/graphql-ts-server-boilerplate/blob/master/ormconfig.json))

7. Connect to the database with `psql` and add the uuid extension:

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
``` 

8. Install and start Redis

9. In `packages/server` create a file called `.env` and add the following line inside: `FRONTEND_HOST=http://localhost:3000`

10. Run `yarn build` in `packages/common`

11. Run `yarn build` in `packages/controller`

12. Get Google Maps API key and put it here https://github.com/benawad/fullstack-graphql-airbnb-clone/blob/master/packages/web/public/index.html#L14 Videos doing that: https://youtu.be/-QQnzDVcTCo and https://youtu.be/xLlIgokKiLc



## Usage

1. Start server `yarn start` in `packages/server`

2. Now you can run `yarn start` in `packages/web` or `packages/app` to start the website or app.

3. How to get credentials working in graphql playground: https://youtu.be/oM-EmNdhwI4?t=8m39s

## Deploy

### App

### Web App

## Features

