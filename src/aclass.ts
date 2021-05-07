export interface gun {
    roundCount() : number;
    aim() : boolean;
    shoot() : boolean;
    reload() : void;
}

export interface autoGun  extends gun {
    fullAuto :boolean;
    
}


export class miniGun implements autoGun {
    private __fullAuto : boolean;
    private __roundCount: number;
    private __rounds : number;

    public constructor(nr:number) {
        this.__fullAuto = false;
        this.__roundCount = nr;
        this.__rounds = nr;
    }
    public reload() : void {
        this.__rounds = this.__roundCount
    }
    public roundCount() : number {
        return this.__roundCount;
    }

    public aim() : boolean {
        console.log("Aiming " + this.__roundCount + " rounds with fullAuto : " + this.__fullAuto);
        return true;
    }
    public shoot() : boolean {
        if (this.__rounds > 0 ) {
            console.log("Shooting " + this.__roundCount + " rounds with fullAuto : " + this.__fullAuto);
            --this.__rounds;
            return true;
        } else {
            console.log("Gun Empty !!");
            return false;
        }
    }

    public get fullAuto()  {
        return this.__fullAuto;
    }

    public set fullAuto(v) {
        this.__fullAuto = v;
    }
        
        
    
}
