
// npm init =npx tsc-w





/*/ typescript me jo bhi code likhte it"ll converted in js cz browser ko livelanguage hi smjhta ni to loading me jada tym lagega
 typescript --------->jvascript--------->Browser
problem we"ll face addition("5"+"5") =55 coz string +string

number + number =number
number + string =string
number + string =string
string + string =string

in javascript how can we sve frm Error adding (string,number) =By checking data type = or by using looping

/*/
// in javascript 
// let x =10

// in typescript

let x: number = 10
let y :string ="Deeps"

// in javascipt we write this code as
// function Addition(q, r) {

//     if(typeof q === 'number' && typeof r ==='number'){
//     console.log(q + r)
// }
// else {
//     console.log('please enter correct output')
// }
// }
// Addition ("12","14") //please enter correct output
// Addition (12,14)//26



// under typescript same code we write as:=

function Addition(q:number, r:number) :void{

console.log(q+r)
}
// Addition ("12","14") //this will not considered here "error occured"
Addition (12,14)//26

// marks/ grade(it can be in number as well as as grade)
let score :number |string ="deepshikha"
// score naam ka jo variable h ye dono value hold kar skta h
