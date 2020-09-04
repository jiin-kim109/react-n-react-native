import { Container, Service, Token } from "typedi";

import { SERVICE_SAMPLE_TOKEN, SampleService } from "./SampleService";
import { SERVICE_SAMPLE_PLATFORM_TOKEN } from "./SamplePlatformService";

const serviceTokenList = [
    SERVICE_SAMPLE_TOKEN,
    SERVICE_SAMPLE_PLATFORM_TOKEN,
];
type ServiceTokenTypes = typeof serviceTokenList[number];

class ServiceInjector {
    public static set<T>(serviceToken: Token<string>, service: T): void{
        if(!serviceTokenList.includes(serviceToken)){
            console.log("SERVICE:: Couldn't register the service '" + serviceToken.name + "' unknown by the Service Injector");
            return;
        }
        Container.set(serviceToken, service);
    }
    public static get(serviceToken: Token<string>): any{
        return Container.get(serviceToken);
    }
}

//---------------- Registered Services ----------------
ServiceInjector.set(SERVICE_SAMPLE_TOKEN, new SampleService("testSrc"));

//---------------- Registered Platform Services ----------------
ServiceInjector.set(SERVICE_SAMPLE_PLATFORM_TOKEN, null);

export { ServiceInjector };