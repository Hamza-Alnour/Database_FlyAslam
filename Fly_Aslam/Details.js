
let allowed_seats = 0;
let booked_seats = [];
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".seatButton");
    
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            ChooseSeat(event, button);
        });
    });
});
function ChooseSeat(event, seat){
    if (booked_seats.indexOf(seat) !== -1) {
        unChooseSeat(event, seat);
    }
    else if(allowed_seats < 10){
        event.preventDefault();
        const seatNo = seat.innerText;
        seat.style.backgroundColor = "#cccccc";
        seat.style.color = "#999999";
        console.log(seatNo);
        allowed_seats += 1;
        booked_seats.push(seat);

    }
    else{
        event.preventDefault();
        alert("You allow to book 10 maximum");
        
    }
}

function unChooseSeat(event, seat){
    event.preventDefault();
    console.log(allowed_seats)
    seat.style.backgroundColor = "#7b9ecc";
    seat.style.color = "white";
    allowed_seats -= 1;
    booked_seats.pop(seat);
}







window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';
});
