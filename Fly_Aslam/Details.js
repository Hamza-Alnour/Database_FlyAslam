
export const allowed_seats = 0;
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
        TotalCost();

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
    TotalCost();
}



function TotalCost() {
    const section = document.getElementById("booking_section");
    let h3 = section.querySelector('h3');

    if (!h3) {
        h3 = document.createElement('h3');
        section.appendChild(h3);
    }

    h3.innerHTML = `Total cost: ${allowed_seats * 399}`;
}

function continueTopayment(){

}



window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';
});
