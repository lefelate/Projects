const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect= document.getElementById('movie');
 populateUI();
let ticketPrice=+movieSelect.value;

//get data from local storage ane populate UI

function populateUI(){
    const selectedSeats=localStorage.getItem('selectedSeats');
    if(selectedSeats !==null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) >-1){
                seat.classList.add('selected');
            }
        })
    }
    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex=selectedMovieIndex
    }
}

// funtion to count the number of seats selected
function updateSelectedCount(){
const selectedSeats=document.querySelectorAll('.row .seat.selected');

const seatIndex=[...selectedSeats].map(seat =>[...seats].indexOf(seat)
);

localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))
//console.log(seatIndex);

const selectedSeatsCount=selectedSeats.length;
count.innerText=selectedSeatsCount;
total.innerText=selectedSeatsCount * ticketPrice;
}

//save selected movie index and price

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//movie select event
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})
// seat click event allowing you to select a seat
container.addEventListener('click', e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

// count and the total
updateSelectedCount();
