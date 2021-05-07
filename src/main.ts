


import { gun,autoGun,miniGun} from "./aclass";
class Hello {
    private __msg : string;
    constructor(s : string ) {
        this.__msg = s;
    }
    public dump() : void  {
        console.log(this.__msg);
    }
    
}

function hello(h : Hello) {
    h.dump();
}


var h = new Hello("a msg");
hello(h);

var ag : autoGun;
ag = new miniGun(10);

ag.aim();


for(var i : number = 0; i < 10;++i) {
    ag.shoot();
}

ag.reload();

ag.aim();



