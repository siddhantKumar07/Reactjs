// let readline = require('readline')
// let r1 = readline.Interface({
//     input: process.stdin,
//     output:process.stdout
// })
// r1.question("write the value ",(value)=>{
//     console.log(value)
//     r1.close()
// })

let fs = require('fs')
let input = fs.readFileSync(0,'utf-8');
console.log(input)