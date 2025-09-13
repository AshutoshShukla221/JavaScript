//Primitive

//7 types:
//String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference (or Non-Primitive)

//3 types: Arrays,Objects,Functions

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null

let userEmail   //undefined by default



//Symbol
const id=Symbol('123')

const anotherid=Symbol('123')

// console.log(id===anotherid)


//BigInt
const bigNumber=24756758735875638n//this is how to create big int

const big=3n


// console.log(typeof bigNumber)

// node datatypes-summary.js


//Arrays

const animal=['monkey','donkey','lion','cheetah']


//Objects


let myObj={
    name:"Ashutosh",
    age:20,

}

//function

const myFunction=function(){
    console.log("Hello World")
}

// console.log(typeof myObj)

//Note- typeof() funtion is used to find the type of data stored in variable


//read:
//    // https://262.ecma-international.org/5.1/#sec-11.4.3



//Stack(Primitive),Heap(Non-Primitive)


//Stack Example
let myGithubName="AshutoshShukla221"

let anotherName=myGithubName
anotherName="Books is good"
// console.log(myGithubName)
// console.log(anotherName)


//Stack Example
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="ashutosh@google.com"

console.log(userOne)
console.log(userTwo)

