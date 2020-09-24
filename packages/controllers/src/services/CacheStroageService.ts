import { Service, Inject, Token } from 'typedi';
import { AsyncStorage } from 'react-native';

export const CACHE_STORAGE_TOKEN = new Token<string>('CACHE_STORAGE_TOKEN');
export abstract class CacheStorageServiceInterface {
    // eslint-disable-next-line
    constructor() {}
    
    abstract getAllKeys(
        callback?: (error?:Error, keys?: Array<string>) => void
    ) : Promise<string[]>;
    abstract getItem(
        key: string, 
        callback?: (error?:Error, result?: string) => void
    ) : Promise<string>;
    abstract setItem(
        key: string, 
        value: string | object, 
        callback?: (error?:Error) => void
    ) : Promise<void>;
    abstract mergeItem(
        key: string, 
        value: string | object, 
        callback?: (error?:Error) => void
    ) : Promise<void>;
    abstract removeItem(
        key: string,
        callback?: (error?:Error, result?: string) => void
    ) : Promise<void>;
    abstract clear(
        callback?: (error?:Error) => void
    ) : Promise<void>; 
    abstract multiGet(
        keys : Array<string>,
        callback?: (errors? : Array<Error>, result?: Array<Array<string>>) => void    
    ) : Promise<[string, string][]>;
    abstract multiSet(
        keyValuePairs : Array<Array<string>>, 
        callback? : (errors? : Array<Error>) => void
    ) : Promise<void>;
    abstract multiRemove(
        keys : Array<string>,
        callback? : (errors? : Array<Error>) => void
    ) : Promise<void>;
    abstract multiMerge(
        keyValuePairs : Array<Array<string>>, 
        callback? : (errors? : Array<Error>) => void
    ) : Promise<void>;

}

@Service()
export class CacheStorageService extends CacheStorageServiceInterface{
    constructor(){
        super();
    }

    getAllKeys = async (callback?: (error?:Error, keys?: Array<string>) => void) => {
        try {
            return await AsyncStorage.getAllKeys(callback);
        } catch (error) {
            console.log(error);
        }
    }
    
    getItem = async (key: string, callback?: (error?:Error, result?: string) => void) => {
        try {
            const value = await AsyncStorage.getItem(key, callback);
            if(value != null) return value;
        } catch(error) { 
            console.log(error);
        }
    }

    setItem = async (key : string, value : string | object, callback?: (error?:Error) => void) => {
        try { 
            if(typeof value === 'object') value = JSON.stringify(value);
            await AsyncStorage.setItem(key,value, callback);
        } catch (error) {
            console.log(error);
        }
    }

    mergeItem = async (key : string, value : string | object, callback?: (error?:Error) => void) => {
        try {
            if(typeof value === 'object') value = JSON.stringify(value);
            await AsyncStorage.mergeItem(key, value, callback);
        } catch (error) {
            console.log(error);
        }
    }

    removeItem = async (key : string, callback?: (error?:Error) => void) => {
        try {
            await AsyncStorage.removeItem(key, callback);
        } catch(error) {
            console.log(error);
        }
    }

    clear = async (callback?: (error?:Error) => void) => {
        try { 
            await AsyncStorage.clear(callback);
        } catch(error) {
            console.log(error);
        }
    }

    multiGet = async (keys : Array<string>, callback? : (errors?: Array<Error>, result?: Array<Array<string>>) => void ) => {
        try {
            return await AsyncStorage.multiGet(keys, callback);
        } catch(error) {
            console.log(error);
        }
    }

    multiSet = async (
        keyValuePairs : Array<Array<string>>, 
        callback? : (errors? : Array<Error>) => void
    ) => {
        try {
            await AsyncStorage.multiSet(keyValuePairs, callback);
        } catch (error) {
            console.log(error);
        }
    };

    multiRemove = async (
        keys : Array<string>,
        callback? : (errors? : Array<Error>) => void
    ) => {
        try {
            await AsyncStorage.multiRemove(keys, callback);
        } catch (error) {
            console.log(error);
        }
    };

    multiMerge = async (
        keyValuePairs : Array<Array<string>>, 
        callback? : (errors? : Array<Error>) => void
    ) => {
        try {
            await AsyncStorage.multiMerge(keyValuePairs, callback);
        } catch (error) {
            console.log(error);
        }
    };
}   