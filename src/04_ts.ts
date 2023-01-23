 enum LifePhase{
    child,
    lad,
    young,
    old,
    deadth
 }
console.log(LifePhase.young)


// //number enum
// //string enum

//================================================

// //number enum
enum days {
    day1 = 5,
    day2,
    day3
}

console.log(days.day1) //5
console.log(days.day3) //7

//================================================

// //string enum

enum weekDay {
    day1 = "DAY1",
    day2 = "DAY2",
    day3 = "DAY3"
}

console.log(weekDay.day1)

//================================================

enum statuscode{
    NotFound = 404,
    Success = 200,
    Forbidden = 403,
    TimeOut = 503
}

if(statuscode.NotFound){
console.log('code not found 4')
}
if(statuscode.Success)
console.log('code not found 3')
{
    if(statuscode.TimeOut){
        console.log('Code not found 4')
    }
}
//================================================

// here we are implementing it, in first about its  common type that further we"ll be following

type person={
    firstName:string,
    lastName:string
}
let name1={
    firstName:'deepshikha',
    lastName:'singh'
}
let name2={
    firstName:'farhana',
    lastName:'mukhtar'
}
let name3={
    firstName:'nishu',
    lastName:'singhal'
}
let name4={
    firstName:'anjali',
    lastName:'singha'
}

//================================================

interface  person1{
    class:number,
    nature:'good' |'bad',
    home:string
}
let dost1={
    class:10,
    nature:'rude',
    home:'gaya'
}
let dost2={
    class:12,
    nature:'bad',
    home:'nawada'
}
let dost3={
    class:15,
    nature:'good',
    home:'gaya'
}
//================================================
//union
// let a: number | string | boolean
// a = "mayuri"
// a = 12000
// a = true

// while using this type,appliying methods will be so difficult,so mind this before using
function walkingSteps(code:string|number){
    console.log(`my walkingSteps is ${code}`)
}
walkingSteps("Extreme")
walkingSteps(5000)
//================================================
//ERROR BCZ CAN'T ADD STRING+STRING

// function sub(x: string | number, y: string | number) {
//     console.log(x + y) 
// }

//================================================
let account:"saving"|"current"
account = "current"
// can only give among these 2
//================================================
// functions,in these function se particulartype ka value return krwa skte hai
// can use "void" if don"t want anything to print

function getname():void{
    console.log("Dj deeps")
}
getname()

function giveString() {
return "hello"
}
giveString()

function canDrive():boolean{
    return true
}
canDrive()

// function element():HTMLSelectElement{
//     return element
// }
// element()

// npx tsc -w