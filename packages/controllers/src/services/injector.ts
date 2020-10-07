import { Container } from "typedi";
import * as firebase from "firebase";

import { db, auth, storage } from "../firebase/firebase";
import { AppCacheService, AppCacheServiceInterface, } from "./app/appCache";

interface InjecteeTypeMap {
    //STAGE: 'dev' | 'stg' | 'prod';
    //WebsocketService: WebsocketService;
    DB: firebase.firestore.Firestore,
    Auth: firebase.auth.Auth,
    Storage: firebase.storage.Storage,
    CacheStorage: AppCacheServiceInterface,
}

type InjecteeScopes = [
    'web',
    'app',
]

export class injector {
    private static defaultScope: InjecteeScopes[number] | undefined = undefined;

    public static setScope(scope?: InjecteeScopes[number]){
        injector.defaultScope = scope;
    }

    public static set<T extends keyof InjecteeTypeMap>(injecteeName: T, injectee: InjecteeTypeMap[T], scope?: InjecteeScopes[number]): void {
        if(!scope){
            Container.set(injecteeName, injectee);
            return;
        }
        Container.set(injecteeName + "_" + (scope as string), injectee);
    }
    public static get<T extends keyof InjecteeTypeMap>(injecteeName: T): InjecteeTypeMap[T] {
        if(injector.defaultScope){
            try{
                return Container.get(injecteeName + "_" + injector.defaultScope);
            }
            catch(error){
                return Container.get(injecteeName);
            }
        }
        return Container.get(injecteeName);
    }
}

injector.set('DB', db);
injector.set('Auth', auth);
injector.set('Storage', storage);

injector.set('CacheStorage', new AppCacheService(), 'app');
//Injector.set('CacheStorage', {}, 'web');