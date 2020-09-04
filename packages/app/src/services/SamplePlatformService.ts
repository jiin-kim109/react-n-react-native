import { SamplePlatformServiceInterface } from "@act/controllers";

export default class SamplePlatformService extends SamplePlatformServiceInterface{
    printName(): string {
        return "SamplePlatformService Initialized";
    }
}   