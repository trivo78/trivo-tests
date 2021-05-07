export class Hello {
    __msg : string;
    constructor(s : string ) {
        this.__msg = s;
    }
    public dump() : void  {
        console.log(this.__msg);
    }
    
}

export function hellohello(h : Hello) : void {
    h.dump();
}
