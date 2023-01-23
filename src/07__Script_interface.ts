// INHERITANCE =CHILD K OBJ PE PARENT PROPERTY CAN ACCESS
// npx tsc -w

interface info {
    //interface me body /definations ni dete 
    displayName(): string
    //displayName is "function name"  string is"its return type
}

function addition() {
    //function is "keyword" //addition () is "signature"
    //statements() //body

}


// // program 1

interface Worldbank {
    loan(): number
    save(): number
}
class Sbi implements Worldbank { //implements bcz we are doing with interface we need to define both 1st as it implements worldbank
    public loan(): number {
        return 1000000
    }
    public save(): number {
        return 20000
    }
public cityName():string{
    return "Gaya"
}
}
let SbiGaya= new Sbi()
console.log(SbiGaya.loan())
console.log(SbiGaya.save())
console.log(SbiGaya.cityName())

class Pnb implements Sbi { //implements bcz we are doing with interface we need to define both 1st as it implements worldbank
    public loan(): number {
        return 50000
    }
    public save(): number {
        return 15000
    }
public cityName():string{
    return "Kendui"
}
public BranchLoctn():string{
    return "Manpur"
}
}
let PnbGaya= new Pnb()
console.log(PnbGaya.loan())
console.log(PnbGaya.save())
console.log(PnbGaya.cityName())
console.log(PnbGaya.BranchLoctn())


// // program 2
// interface having setup rules 

interface Manager{
    profile():string
}
interface SrMgr{
    salary():number
    flexibility():string
}
// we want ki ye dono ka interface use kare
class AGM implements Manager,SrMgr{
    profile():string{
        return " SR MANAGER"
    }
    salary():number{
        return 200000
    }
    flexibility():string{
        return "yes"
    }
}
class DGM implements SrMgr{
    // profile():string{
    //     return "MANAGER"
    // }
    salary():number{
        return 5000000
    }
    flexibility():string{
        return "yes"
    }
}

let Rahul = new AGM()
console.log(Rahul.flexibility())
console.log(Rahul. salary())
console.log(Rahul. profile())

let Deepshikha = new DGM()
console.log(Deepshikha.flexibility())
console.log(Deepshikha. salary())

// // program 3
// // extends 

interface LowerLevel{
    Authority ():string
}
class MIddleLevel implements LowerLevel{
    Authority ():string{
        return "Have POwer To Take DEcisions"
    }  
}
class HighLevel extends MIddleLevel{
    // Authority ():string{
    //     return "Have POwer To pass DEcisions"
    // } 
    Confidentiall ():string{
        return "Have POwer To hold Confidentiall Matters"
    } 
    call ():number{
        return 91554535677
    } 
}
let Alfa = new HighLevel()
console.log(Alfa.Authority ())
console.log(Alfa.Confidentiall())
console.log(Alfa.call ())

// program 4 OVERLODING 
interface school{
    Education():string
}
class TEacher implements school{
    Education():string{
     return "Graduation  & B8 needs to complete"   
    }
}
class Principal extends TEacher{
Salary():number{
    return 800000 
}
DEcisions():string{
    return "can only take all decisions" 
}
 //here this is example of OverRiding ,if we want to change the return typethn we need to updatae it,,,same method name , same signature , differnt class
 Education():string{
    super.Education()
    return " Mandatory  Graduation "
 }
}

let MagadhUniversity = new Principal()
console.log(MagadhUniversity.Education())
console.log(MagadhUniversity.DEcisions())
console.log(MagadhUniversity.Salary())



