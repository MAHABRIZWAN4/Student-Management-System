#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const randon_number:number = Math.floor(10000 + Math.random() * 90000)
let my_balance =  0;

let  answer = await inquirer.prompt([{
    name:"students",
    message:"Enter the name of student",
    type:"input",
    validate: function(value){
        if(value.trim() !== ""){
            return true;
        
    }

    return "please enter a non-empty value.";
}
},{
    name:"courses",
    message:"Enter the course to enrolled",
    type:"list",
    choices:["Ms Office","Ms Word","HTML","CSS","Typescript","Phython","Web Development","Artificial Intelligence"]
}]);


const tutionFee:{[key: string]:number} = {
    "Ms Office": 2000,
    "Ms Word":2500,
    "HTML":5000,
    "CSS":4500,
    "Typescript":8000,
    "Phython":6000,
    "Web Development":10000,
    "Artificial Intelligence":20000,

}
console.log(`\nTution fee: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${my_balance}\n`);

let paymentType = await inquirer.prompt([{
    name:"payment",
    message:"Select your payment method",
    type:"list",
    choices:["Bank Transfer","Easy paisa","JazzCash"]
},{
    name:"amount",
    message:"Tranfer Money",
    type:"input",
    validate: function(value){
        if(value.trim() !== ""){
            return true;
    }
    return "please enter a non-empty value.";
}
}])


console.log(`\n You select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(`Congratulations! You have successfully enrolled in ${answer.courses}.\n`);

let ans = await inquirer.prompt([{
    name:"select",
    message:"What would you like to do next",
    type:"list",
    choices:["View status","Exit"]
}])
if (ans.select === "View status") {
    console.log("*************VIEW STATUS*************");
    console.log(`Student Name: ${answer.students}`);
    console.log(`ID: ${randon_number}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`Balance: ${my_balance += paymentAmount}`);
}
else{
    console.log("\nExiting Student Management System\n");
}
}
else{
    console.log("Invalid amount due to course\n");
}


