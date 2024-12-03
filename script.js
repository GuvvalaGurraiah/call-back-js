//Callback funtions

function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

function func1(callback) {
    console.log("Function 1");
    let num = parseInt(prompt("Enter an integer"));
    callback(num);
}
function func2(a) {
    if (a % 2 == 0) {
        console.log("even");
    }
}
func1(func2);

function num(callback) {
    let startnum = parseInt(prompt("Enter the start number"));
    let endnum = parseInt(prompt("Enter the end number"));
    callback(startnum, endnum);
}
function sumOfNumbers(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);

}
num(sumOfNumbers);

//Pue and Impure functions

let prod = 1;
function product(){
for(let i = 1;i<=10;i++){
    prod*=i;
}
console.log(`Product = ${prod}`); //Impure as the input and output are not same
}
product();

function mul(a,b){
    let c = a*b;
    console.log(c)   //Pure as the input and output are same
}
mul(2,3);




