const search_button = document.getElementById("search_button");
let flight;
let views = [];

var titleImageList = [
    { title: "Saudi Airline", imageUrl: "assets/Saudi_airline.png" },
    { title: "Flynas Airline", imageUrl: "assets/flynas-logo.webp" },
    { title: "FlyAdeel Airline", imageUrl: "assets/flyadeal-logo-5C11A0DF5C-seeklogo.com.png" },
    { title: "Wizz Airline", imageUrl: "assets/Wizz_Air-logo-E0043516A2-seeklogo.com.png" },
  ];



search_button.addEventListener("click", FilterFlights);
document.addEventListener('DOMContentLoaded', fetchFlightsData);


async function fetchFlightsData(params) {
    //http://localhost:3000/flights
    const response = await fetch('http://localhost:3000/flights', {

        method: "GET",
        //body: JSON.stringify(params),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    flights = await response.json();
    console.log(flights);
}

function displayFlight(){
  console.log("dis")
    const section = document.getElementById("search_bar");
    section.innerHTML = `<div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="location_input" type="text" />
              <label>Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="start_time" type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="arrive_time" type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button title="Search" type="button" id="search_button" class="btn"><i class="ri-search-line"></i></button>
      </form>`;

    flights.forEach((flight, index) => {
      var randomPair = getRandomTitleImage();
        var form = document.createElement('form');
        form.setAttribute('id', 'flight');
        form.innerHTML += `
        <div>
          <ul id="card_row1">
            <img id="airline_logo" src="${randomPair.imageUrl}">
            <p style="font-size: 25px; align-self: center; ">${randomPair.title}</p>
          </ul>
          <ul id="card_row2">
            <ul style="display: grid; grid-template-columns: auto auto auto;  grid-column-gap: 185px;">
              <p style="font-size: 20px; font-weight: bold;">${flight.Source}</p>
              <img id="plan" src="assets/aeroplane-airplane-icon-on-transparent-background-free-png.webp">
              <p style="font-size: 20px; font-weight: bold;">${flight.Destination}</p>
            </ul>
              <p>${flight.Date}</p>
          </ul>
          <ul id="card_row3">
            <p style="font-size: 20px;">${flight.DepartureTime}</p>
            <div id="line"></div>
            <p style="font-size: 20px;">${flight.ArriveTime}</p>
          </ul>
          <ul id="card_row4">
            <p style="font-size: 15px;">3 Seats</p>
            <button id="details"><a href="">Fly Details</a></button>
          </ul>
        </div>
        `;
        section.appendChild(form);
    });
    return ;

}


function getRandomTitleImage() {
  var randomIndex = Math.floor(Math.random() * titleImageList.length);
  return titleImageList[randomIndex];
}








function FilterFlights(){
  console.log("in");
    const location_input = document.getElementById("location_input").value;
    flights.forEach((flight, index) => {
        if(flight.Destination === location_input){
            views.push(flight);
        }
    });

    if(views == ''){
      console.log("empty");
      return displayFlight();
    }
    const section = document.getElementById("search_bar");

    var randomPair = getRandomTitleImage();

    section.innerHTML = `<div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="location_input" type="text" />
              <label>Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="start_time" type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input id="arrive_time" type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button title="Search" type="button" id="search_button" class="btn"><i class="ri-search-line"></i></button>
      </form>`;

    views.forEach((flight, index) => {
      var form = document.createElement('form');
      form.setAttribute('id', 'flight');
      form.innerHTML += `
      <div>
        <ul id="card_row1">
          <img id="airline_logo" src="${randomPair.imageUrl}">
          <p style="font-size: 25px; align-self: center; ">${randomPair.title}</p>
        </ul>
        <ul id="card_row2">
          <ul style="display: grid; grid-template-columns: auto auto auto;  grid-column-gap: 185px;">
            <p style="font-size: 20px; font-weight: bold;">${flight.Source}</p>
            <img id="plan" src="assets/aeroplane-airplane-icon-on-transparent-background-free-png.webp">
            <p style="font-size: 20px; font-weight: bold;">${flight.Destination}</p>
          </ul>
            <p>${flight.Date}</p>
        </ul>
        <ul id="card_row3">
          <p style="font-size: 20px;">${flight.DepartureTime}</p>
          <div id="line"></div>
          <p style="font-size: 20px;">${flight.ArriveTime}</p>
        </ul>
        <ul id="card_row4">
          <p style="font-size: 15px;">3 Seats</p>
          <button id="details"><a href="">Fly Details</a></button>
        </ul>
      </div>
      `;
      section.appendChild(form);
      });
      return;
}


document.body.addEventListener('click', function(event) {
  if (event.target === search_button) {
      console.log('Button clicked!');
      FilterFlights();
  }
});