const countEl=document.getElementById('count_el');

let count=0;
let increment =setInterval(() => {
    count= count+1;
    countEl.innerText=count;
    if(count===10){
        count=10;
        clearInterval(increment);
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



