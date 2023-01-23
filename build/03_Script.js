"use strict";
//=================================================string
let a = "kajal";
console.log(a);
// a=10
//=================================================number
let rollNumber;
rollNumber = 12;
//rollNumber="one"
//=============================================Boolean
let age;
age = true;
// age:"false"
// console(age)
//==============================================multiple object
function add(w, y) {
    return w + y;
}
let sum = add(19, 10);
console.log(sum);
function multiply(x, y) {
    console.log(x * y);
}
add(12, 2);
//==============================================Array
// let school=["magadh","chandigarh","hariyana"]
// let school:string[]
let student1 = ["kajal", "rajabal", "navjot"];
student1.push('kajal');
// student.push(90)
console.log(student1);
let bhajan = ['kamal', 'nayan', 'phushpa'];
bhajan.forEach((el) => {
    console.log(el.length);
});
//===================
let names;
names = ["kirit", "rajat", "raghav"];
names.forEach(function (el) {
    el.toUpperCase();
});
//==============================================TUPLE [Array OF FIXED LENGTH]
// SOME EXCEPTIONS :-1ST VALUE SHULD B NO,REST 2 SHULD N STRNG
let info;
info = [21234344, "rajbah", "kirana"];
console.log(info);
//==============================================ENUM roles [type once defined ,it"ll autodefined in future]
var roles;
(function (roles) {
    roles[roles["grandfather"] = 0] = "grandfather";
    roles[roles["grandmother"] = 1] = "grandmother";
    roles[roles["father"] = 2] = "father";
    roles[roles["mother"] = 3] = "mother";
    roles[roles["son"] = 4] = "son";
    roles[roles["daughter"] = 5] = "daughter";
})(roles || (roles = {}));
if (roles.grandfather) {
    console.log("roles");
}
// 
