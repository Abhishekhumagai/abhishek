// let a=1;
// let b=2;

// function sum (a,b){
//     return a+b;


// }
// console.log(sum(a,b));

// function sub(a,b){
//     return a-b;
// }
// console.log(sub(a,b));


// function mul(a,b){
//     return a*b;
// }
// console.log(mul(a,b));

// function div(a,b){
//     return a-b;
// }
// console.log(div(a,b));

function calculate(a, b,op) {
    let answer
    switch (op) {
        case "*":
        answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break
        default:
            "you didn'n match the operator";
    }
    return answer;
}
let ans=calculate(1,2,"+")
let ans1=calculate(4,2,"-")

console.log(ans);
console.log(ans1);
