let h1jm = document.querySelector(".h1jm");
let p1jm = document.querySelector(".p1jm");
let upjm1 = document.querySelector(".upjm1");
let hjm = "Hello, world!";
let pjm = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
let pjm1 = "It uses utility classes for typography and spacing to space content out within the larger container.";
let index1 =1;
let index2 =1;
let index3 =1;
// #####################################
function writeh1jm(){
    h1jm.innerHTML=`${hjm.slice(0,index1)}|`;
    h1jm.style.fontWeight="bold"
    index1++
}
setInterval(writeh1jm,100)
// #####################################
function writep1jm(){
    p1jm.innerHTML=`${pjm.slice(0,index2)}`;
    p1jm.style.fontWeight="bold"
    index2++
}
setInterval(writep1jm,100)
function writeupjm1(){
    upjm1.innerHTML=`${pjm1.slice(0,index3)}`;
    upjm1.style.fontWeight="bold"
    index3++
}
setInterval(writeupjm1,100)