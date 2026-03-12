
// fibonacci series
function fibonacci(n){
  const fib=[0,1]
  for(let i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
  }
  return fib
}
console.log(fibonacci(5))
// factroil
let fact=(n)=>{
  let sum=1;
  for(let i=1;i<=n;i++){
      sum*=i;
  }
  return sum
}
console.log(fact(4))
//
// prime number
const prime=(n)=>{
  if(n<2) return false
  for(let i=2;i<n;i++){
    if(n%i===0) return false;
  }
  return true
}
//without for loop
const woprime=(n,i=2)=>{
  if(n<2)return false
  if(i>Math.sqrt(n))return true
  if(n%i===0) return false
  return woprime(n,i+1)
}

console.log(prime(1))
console.log(prime(5))
console.log(prime(9))
console.log(Math.sqrt(3))

console.log("/////////////////")
console.log(woprime(3))
// let inval=document.querySelector("input");
// console.log(inval.value);
// console.log(inval.getAttribute("myname"));
// console.log(inval.attributes[0].value);
// console.log(inval.attributes[0].value);
// console.log(inval.attributes.value);
// console.log(inval.attributes["id"].value);
// console.log(inval.attributes.myname.value);
// console.log(inval.hasAttribute("myname"));




//  let vv=[1,2,3,4,4,5]
//  vv.forEach(vale=>console.log(vale))
// //  console.log(inval.attributes[])
// //  inval.attributes.forEach(vale=>console.log(vale))
//  for (let i = 0; i < inval.attributes.length; i++) {
//    console.log(inval.attributes[i]);
    
//  }
//  let buttonst=document.querySelector(".input-container button");
//  let invlaue=document.querySelector(".input-container input");
//  buttonst.setAttribute("style","color:black;background-color:royalblue;border:none;padding:6px;border-radius:3px");
//  buttonst.style.fontSize="10px";
//  invlaue.style.cssText+="border-radius:5px;background-color:gray";
//  console.log(window.getComputedStyle(invlaue))

//  let contain=document.querySelector(".input-container");
//  contain.className+=" contain2 contain3 contain4";
//  contain.classList.add("contain5");
//  console.log(contain.classList);
//  console.log(contain.classList.contains("contain4"));
//  contain.classList.remove("contain3");
//  contain.classList.replace("contain2","contain6");
//  contain.classList.toggle("contain22")
// async function f(params) {
//    await setTimeout(()=>{contain.classList.toggle("contain555")},4000)
  
// } 
  

// contain.classList.forEach((val)=>{console.log(val)})
// //c
// const showBtnEl=document.querySelector("#elebtn");
// const inputcontainer=document.querySelector(".input-container")

// showBtnEl.addEventListener("click",()=>{
//   console.log("click")
//   inputcontainer.classList.toggle("disable");
//   if(inputcontainer.classList.contains("disable")){
//     showBtnEl.innerText="SHOW DIV"
//     showBtnEl.style.color="white";
//     showBtnEl.style.backgroundColor="blue";
//   }
//   else{
//     showBtnEl.innerText="HIDE DIV"
//     showBtnEl.style.color="white";
//     showBtnEl.style.backgroundColor="red";
//   }
// })