const countEl=document.getElementById('count_el');
const headingEl=document.getElementById('heading')
let count=0;

let increment =setInterval(() => {
    count++;
    countEl.innerText=count;
    if(count===10){
        count=10;
        clearInterval(increment);
        headingEl.innerText="Decreasing numbers";
        let decrement=setInterval(() => {
            count--;
           countEl.innerText=count;
           if( count==0){
               clearInterval(decrement);
           }
       }, 2000);
    }
    return count;
}, 2000);



