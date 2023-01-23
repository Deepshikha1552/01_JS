"use strict";
var LifePhase;
(function (LifePhase) {
    LifePhase[LifePhase["child"] = 0] = "child";
    LifePhase[LifePhase["lad"] = 1] = "lad";
    LifePhase[LifePhase["young"] = 2] = "young";
    LifePhase[LifePhase["old"] = 3] = "old";
    LifePhase[LifePhase["deadth"] = 4] = "deadth";
})(LifePhase || (LifePhase = {}));
console.log(LifePhase.young);
// //number enum
// //string enum
//================================================
// //number enum
var days;
(function (days) {
    days[days["day1"] = 5] = "day1";
    days[days["day2"] = 6] = "day2";
    days[days["day3"] = 7] = "day3";
})(days || (days = {}));
console.log(days.day1); //5
console.log(days.day3); //7
//================================================
// //string enum
var weekDay;
(function (weekDay) {
    weekDay["day1"] = "DAY1";
    weekDay["day2"] = "DAY2";
    weekDay["day3"] = "DAY3";
})(weekDay || (weekDay = {}));
console.log(weekDay.day1);
//================================================
var statuscode;
(function (statuscode) {
    statuscode[statuscode["NotFound"] = 404] = "NotFound";
    statuscode[statuscode["Success"] = 200] = "Success";
    statuscode[statuscode["Forbidden"] = 403] = "Forbidden";
    statuscode[statuscode["TimeOut"] = 503] = "TimeOut";
})(statuscode || (statuscode = {}));
if (statuscode.NotFound) {
    console.log('code not found 4');
}
if (statuscode.Success)
    console.log('code not found 3');
{
    if (statuscode.TimeOut) {
        console.log('Code not found 4');
    }
}
let name1 = {
    firstName: 'deepshikha',
    lastName: 'singh'
};
let name2 = {
    firstName: 'farhana',
    lastName: 'mukhtar'
};
let name3 = {
    firstName: 'nishu',
    lastName: 'singhal'
};
let name4 = {
    firstName: 'anjali',
    lastName: 'singha'
};
let dost1 = {
    class: 10,
    nature: 'rude',
    home: 'gaya'
};
let dost2 = {
    class: 12,
    nature: 'bad',
    home: 'nawada'
};
let dost3 = {
    class: 15,
    nature: 'good',
    home: 'gaya'
};
//================================================
//union
// let a: number | string | boolean
// a = "mayuri"
// a = 12000
// a = true
// while using this type,appliying methods will be so difficult,so mind this before using
function walkingSteps(code) {
    console.log(`my walkingSteps is ${code}`);
}
walkingSteps("Extreme");
walkingSteps(5000);
//================================================
//ERROR BCZ CAN'T ADD STRING+STRING
// function sub(x: string | number, y: string | number) {
//     console.log(x + y) 
// }
//================================================
let account;
account = "current";
// can only give among these 2
//================================================
// functions,in these function se particulartype ka value return krwa skte hai
// can use "void" if don"t want anything to print
function getname() {
    console.log("Dj deeps");
}
getname();
function giveString() {
    return "hello";
}
giveString();
function canDrive() {
    return true;
}
canDrive();
// function element():HTMLSelectElement{
//     return element
// }
// element()
// npx tsc -w
