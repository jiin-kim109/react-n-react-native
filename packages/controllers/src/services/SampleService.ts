import { Service, Inject } from 'typedi';
import { auth } from 'firebase';


export abstract class SampleServiceInterface {
    // eslint-disable-next-line
    constructor(src: string) {
      /* No op, should be implemented in an extended class */
    }

    abstract getName(): string;
}

@Service()
export class SampleService extends SampleServiceInterface{
    constructor(src: string){
        super(src);
    }

    getName(){
        return "SampleService On";
    }
}   