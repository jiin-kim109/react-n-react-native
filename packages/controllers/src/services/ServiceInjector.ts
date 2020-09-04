import { Container } from "typedi";

import firebase from "./Firebase";
import { SampleService, SampleServiceInterface } from "./SampleService";
import { SamplePlatformServiceInterface } from "./SamplePlatformService";

interface ServiceTypeMap {
    Firebase: typeof firebase
    SampleService: SampleServiceInterface
    SamplePlatformService: SamplePlatformServiceInterface
}

class ServiceInjector {
    public static set<T extends keyof ServiceTypeMap>(serviceName: T, service: ServiceTypeMap[T]): void{
        Container.set(serviceName, service);
    }
    public static get<T extends keyof ServiceTypeMap>(serviceName: T): ServiceTypeMap[T]{
        const instance: ServiceTypeMap[T] = Container.get(serviceName);
        if (!instance)
            console.log("SERVICE:: Couldn't find a registered service '" + serviceName + "'");
        return instance;
    }
}

//---------------- Registered Services ----------------
ServiceInjector.set('Firebase', firebase);
ServiceInjector.set('SampleService', new SampleService("testSrc"));

//---------------- Registered Platform Services ----------------
ServiceInjector.set('SamplePlatformService', null);

export { ServiceTypeMap, ServiceInjector };