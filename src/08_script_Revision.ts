// interface-- completetion abtraction
// npx tsc -w
interface Minskole{
    DigitalMarketing():string
    NumTutors():number
}
class Programmerrs implements Minskole{
    DigitalMarketing(): string {
        return "Deepshikha"
    }
    NumTutors():number{
        return 10
    }
    displayLocation():string{
        return "kharadi"
    }
}
let chinmay = new Programmerrs()
console.log(chinmay.displayLocation())
console.log(chinmay.NumTutors())
console.log(chinmay.DigitalMarketing())

// program 2
interface jobtype{
    DigitalCreating():string
    Teacherss():number
    Supporting():number
}
interface Staffsupport{
    Owners():number
}
interface location {
    NumberExist():string
}
class Minskole2 implements jobtype ,Staffsupport,location{
    DigitalCreating():string{
        return "deepshikha"
    }
    Teacherss():number{
        return 10
    }
    Supporting():number{
        return 5
    }
    Owners():number{
        return 3
    }
    NumberExist():string{
        return "NewNagpur"
    }

}
let ProgrammerrsHub = new Minskole2()
console.log(ProgrammerrsHub.DigitalCreating())
console.log(ProgrammerrsHub.Teacherss())
console.log(ProgrammerrsHub.Owners())
console.log(ProgrammerrsHub.NumberExist())

class kharadi implements jobtype ,Staffsupport,location{
    DigitalCreating():string{
        return "Roshhini"
    }
    Teacherss():number{
        return 13
    }
    Supporting():number{
        return 15
    }
    Owners():number{
        return 7
    }
    NumberExist():string{
        return "Nagpur"
    }

}
let ProgrammerrsHub2 = new kharadi()
console.log(ProgrammerrsHub2.DigitalCreating())
console.log(ProgrammerrsHub2.Teacherss())
console.log(ProgrammerrsHub2.Owners())
console.log(ProgrammerrsHub2.NumberExist())

// program 3 // inheritance & interface combination
interface Tools {
IdCard :number
}
class Company implements Tools{
    Marketing:string
    Sales:string
    IdCard:number
    constructor(MR:string , SL:string ,IdCard:number){
        this.Marketing = MR
        this.Sales = SL
        this.IdCard = IdCard  
    }
}
class Profit extends Company{
    constructor(MR:string , SL:string ,IdCard:number){
        super(MR,SL,IdCard)
    }
}

let Hub = new Profit("Mayuri","Deepshikha",788976)
console.log(Hub.Marketing)
console.log(Hub.Sales)
console.log(Hub.IdCard)
