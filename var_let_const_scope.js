// ////////////////////var////////////////
// var a=39;//loacal_scope
// function fun_1(){
// var b=32;
// console.log(b,a);
// }
// console.log(a);
// // console.log(b); error
// fun_1();
// /////////////let////////////////
// let x=89;
// function fun_2(){
// let y=23;

// console.log(y);
// console.log(x);

// }
// // console.log(y);error
// console.log(x);
// fun_2();
////////////////////const////////////////
const z = 90;
function fun_3() {
    console.log(z);
    const p = 3;
    console.log(p);
}
// console.log(p);error
console.log(z);
fun_3()