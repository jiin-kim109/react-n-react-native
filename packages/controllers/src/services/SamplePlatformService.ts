import { Token } from 'typedi';

export const SERVICE_SAMPLE_PLATFORM_TOKEN = new Token<string>('SERVICE_SAMPLE_PLATFORM');

export abstract class SamplePlatformServiceInterface {
    // eslint-disable-next-line
    constructor() {
      /* No op, should be implemented in an extended class */
    }

    abstract getName(): string;
}