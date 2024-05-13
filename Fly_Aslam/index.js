const search_button = document.getElementById("search_button");
let flights;
let views = [];


search_button.addEventListener("click",searchByLocation )

function searchByLocation(){
    const location_input = document.getElementById("location_input");

    foreach(flight in flights);{
        if(location_input === flight.location){
            views.add(flight);
        }
    }

}