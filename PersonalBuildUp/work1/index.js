
let count=0;

function increment(){
    count+=1;
    document.getElementById("count_el").innerText=count;
    return count;
  
   //console.log("The button has been clicked");
}

let saveEl=document.getElementById("save_el");
let previousEntries="Previous entries:"

function save(){
let previousEntries= count +" - "
saveEl.textContent+=previousEntries;
count=0;
document.getElementById("count_el").innerText=count;
}

let fn ='Linda';
let greeting='Hi there';

function work(){
    console.log(greeting +","+ fn+"!");
}

//work();


let myPoints=3;

function add3points(){
    myPoints+=3;
    return myPoints;
}

function removePoint(){
    myPoints-=1;
    return myPoints;
}

add3points();
add3points();
add3points();
removePoint();
removePoint();

//console.log("Points scored is "+myPoints);

/*let age= 16

if (age >=21){
   console.log("welcome, enjoy yorself in the nightclub");
}else{
   console.log("Sorry, you're not off age to use the nightclub");
}
*/


let age=70

if (age<100){
    console.log("You are not eligible for a card");
}else if(age===100){
    console.log("Here is your birthday card from the king");
}
else{
    console.log("You have one already");
}

