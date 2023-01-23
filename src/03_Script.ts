//=================================================string
let a="kajal"
console.log(a)
// a=10

//=================================================number
let rollNumber: number
rollNumber = 12
//rollNumber="one"

//=============================================Boolean
let age:boolean
age=true
// age:"false"
// console(age)

//==============================================multiple object

function add(w:number, y:number):number{
return w+y
}
let sum =add(19,10)
console.log(sum)

function multiply(x:number,y:number):void{
    console.log(x*y)
}
add(12,2)

//==============================================Array

// let school=["magadh","chandigarh","hariyana"]
// let school:string[]

let student1:string[] =["kajal","rajabal","navjot"]
student1.push('kajal')
// student.push(90)
console.log(student1)

let bhajan: Array<string> =['kamal','nayan','phushpa']
bhajan.forEach((el:string)=>{
    console.log(el.length)
})
//===================

let names :string[];
names=["kirit","rajat","raghav"]
names.forEach(function(el){ //once it understand the type ,can apply other methods too

    el.toUpperCase()
})

//==============================================TUPLE [Array OF FIXED LENGTH]
// SOME EXCEPTIONS :-1ST VALUE SHULD B NO,REST 2 SHULD N STRNG
let info :[number,string,string]
info=[21234344,"rajbah","kirana"]
console.log(info)

//==============================================ENUM roles [type once defined ,it"ll autodefined in future]
enum roles{
    grandfather,
    grandmother,
    father,
    mother,
    son,
    daughter
}

if (roles.grandfather){
console.log("roles")
}


// 



