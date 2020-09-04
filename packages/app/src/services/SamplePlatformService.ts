import { SamplePlatformServiceInterface } from "@act/controllers";

export default class SamplePlatformService extends SamplePlatformServiceInterface{
    getName(): string {
        return "SamplePlatformService On";
    }
}   