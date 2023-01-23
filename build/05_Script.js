"use strict";
// npx tsc -w
// CLASS =>> ACCESS MODIFIER =IN WHICH WE DECIDE WHOM WE WANT TO ACCESS AND WHAT CONTENT/MATRERIAL
// class Employee {
//     fullName: string
//     Employeeid: Number
//     constructor(Fname: string, EmpId: number) {
//         this.fullName = Fname
//         this.Employeeid = EmpId
//     }
//     display(): string {
//         return this.fullName
//     }
// }
// let pallavi: Employee = new Employee("pallaviJoshi", 09879)
// console.log(pallavi)
// //====================================================================
// //private, class k bahar access ni kar skte,limited scope
//public,can acces anywhere ,inside class,outof class,can acheive anywhre
//protected,readOnly
// class school {
//     private Name: string
//    public BatchNo: number
//     public constructor(Nm: string, Bn: number) {
//         this.Name = Nm
//         this.BatchNo = Bn
//     }
//     getName(): number { //we are writting method here to return name
//         console.log(this.BatchNo)
//         return this.BatchNo
//     }
// }
// let dayanand =new school("DayanandSaraswati",4545656)
// console.log(dayanand.BatchNo)
// // console.log(dayanand.getName())
// // console.log(dayanand.Name)
// //====================================================================
// class school {
//     private Name: string
//    public BatchNo: number
//     public constructor(Nm: string, Bn: number) {
//         this.Name = Nm
//         this.BatchNo = Bn
//     }
//     public getBatch(): number { 
// //If we want to see the pvt body in public""" this.info() """ (line 58 ,we need to write it under public body,so that we cn access it outside)
//         this.info() 
//         console.log(this.BatchNo)
//         return this.BatchNo
//     }
//     private info(): void { //YAHA RETURN STATAEMNT NI AAEGA
//                 console.log(`my number is ${this.BatchNo} and my BatchNo is ${this.BatchNo}`)
//             }
// }
// let dayanand =new school("DayanandSaraswati",4545656)
// console.log(dayanand.BatchNo)
// console.log(dayanand.getBatch())
// console.log(dayanand.Name)
//=======================shorthand=============================================
// ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
// class school {
//     public constructor(private Nm: public string, Bn: number) {
//      }
//     public getBatch(): number {
//         this.info()
//         console.log(this.Bn)
//         return this.Bn
//     }
//     private info(): void { //YAHA RETURN STATAEMNT NI AAEGA
//         console.log(`my number is ${this.Bn} and my BatchNo is ${this.Bn}`)
//     }
// }
// let dayanand = new school("DayanandSaraswati", 4545656)
// let a123 = dayanand.getBatch()
// console.log(a123)
// console.log(dayanand.Bn)
// console.log(dayanand.getBatch())
//====================================================================
// class  kiki{
//     private name :string
//     constructor(private name:string){ //error???
//         this.name = name
//     }
// }
//     let kikiya=new kiki("deepshikha")
// both are same
// class  kiki{
//     constructor(private name:string){
//     }
// }
//     let kikiya=new kiki("deepshikha")
//READ ONLY IS ALSO A ACCESS MODIFIER
//readOnly
class Student {
    constructor(name1) {
        this.name1 = name1;
    }
    setName(name) {
        console.log(this.name1); //Madhuri
        return this.name1 = name;
    }
}
let madhuri = new Student('Madhuri');
let newname = madhuri.setName('vaishali');
console.log(newname);
