"use strict";
// INHERITANCE =CHILD K OBJ PE PARENT PROPERTY CAN ACCESS
// npx tsc -w
function addition() {
    //function is "keyword" //addition () is "signature"
    //statements() //body
}
class Sbi {
    loan() {
        return 1000000;
    }
    save() {
        return 20000;
    }
    cityName() {
        return "Gaya";
    }
}
let SbiGaya = new Sbi();
console.log(SbiGaya.loan());
console.log(SbiGaya.save());
console.log(SbiGaya.cityName());
class Pnb {
    loan() {
        return 50000;
    }
    save() {
        return 15000;
    }
    cityName() {
        return "Kendui";
    }
    BranchLoctn() {
        return "Manpur";
    }
}
let PnbGaya = new Pnb();
console.log(PnbGaya.loan());
console.log(PnbGaya.save());
console.log(PnbGaya.cityName());
console.log(PnbGaya.BranchLoctn());
// we want ki ye dono ka interface use kare
class AGM {
    profile() {
        return " SR MANAGER";
    }
    salary() {
        return 200000;
    }
    flexibility() {
        return "yes";
    }
}
class DGM {
    // profile():string{
    //     return "MANAGER"
    // }
    salary() {
        return 5000000;
    }
    flexibility() {
        return "yes";
    }
}
let Rahul = new AGM();
console.log(Rahul.flexibility());
console.log(Rahul.salary());
console.log(Rahul.profile());
let Deepshikha = new DGM();
console.log(Deepshikha.flexibility());
console.log(Deepshikha.salary());
class MIddleLevel {
    Authority() {
        return "Have POwer To Take DEcisions";
    }
}
class HighLevel extends MIddleLevel {
    // Authority ():string{
    //     return "Have POwer To pass DEcisions"
    // } 
    Confidentiall() {
        return "Have POwer To hold Confidentiall Matters";
    }
    call() {
        return 91554535677;
    }
}
let Alfa = new HighLevel();
console.log(Alfa.Authority());
console.log(Alfa.Confidentiall());
console.log(Alfa.call());
class TEacher {
    Education() {
        return "Graduation  & B8 needs to complete";
    }
}
class Principal extends TEacher {
    Salary() {
        return 800000;
    }
    DEcisions() {
        return "can only take all decisions";
    }
    //here this is example of OverRiding ,if we want to change the return typethn we need to updatae it,,,same method name , same signature , differnt class
    Education() {
        super.Education();
        return " Mandatory  Graduation ";
    }
}
let MagadhUniversity = new Principal();
console.log(MagadhUniversity.Education());
console.log(MagadhUniversity.DEcisions());
console.log(MagadhUniversity.Salary());
