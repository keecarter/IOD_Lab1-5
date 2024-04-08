//Mathematical operations

function diff(a, b){
    return a - b
};
//this function returns the difference of two inputs, a and b. 
console.log(diff(0, 0))
 
if(diff(2,1)!=1){
    throw new Error("Test failed for diff(2,1)")
};
if (diff(0,0)==14) {
    throw new Error("Test failed for diff(0,0)")
};
if (diff(0,10)!= -10) {
    throw new Error("Test failed for diff(0,10)")
};

function sum(a, b){
    return a + b
};
//this function returns the sum of two inputs, a and b. 
console.log(sum(1, 2))

if(sum(1,2)!=3) {
    throw new Error("Test failed for sum(1,2)")
};
if (sum(6,8)==14) {
    throw new Error("Test failed for sum(6,8)")
};
if (sum(0,10)!=10) {
    throw new Error("Test failed for sum(0,10)")
};

function quotient(a, b){
    return a/b
};
//this function returns the quotient of two inputs, a and b. 
console.log(quotient(100, 50))

if(quotient(2,1)!=2) {
    throw new Error("Test failed for quotient(2,1)")
};
if (quotient(2,1)==3) {
    throw new Error("Test failed for quotient(2,1)")
};
if (quotient(100,10)==10) {
    throw new Error("Test failed for quotient(100,10)")
};

function product(a, b){
    return a * b
};
//this function returns the product of two inputs, a and b. 
console.log(product(2, 10))

if(product(1,1)==1) {
    throw new Error("Test failed for product(1,1)")
};
if (product(6,6)!=36) {
    throw new Error("Test failed for product(6,6)")
};
if (product(0,10)!=10) {
    throw new Error("Test failed for product(0,10)")
};


//Hello [Name] Function
function hello(name) {
    console.log("Hello " + name);
}
//this function returns the input inserted in the hello() function. 
hello("Keidra");

if(hello("Keidra")==3) {
    throw new Error("Test failed for 'Keidra'")
};
if(hello("Mary")==10) {
    throw new Error("Test failed for 'Mary'")
};
if(hello("John")==0) {
    throw new Error("Test failed for 'John'")
};