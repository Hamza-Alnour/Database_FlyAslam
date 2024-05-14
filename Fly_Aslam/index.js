const search_button = document.getElementById("search_button");

search_button.addEventListener("click", fetchFlightsData);


async function fetchFlightsData(params) {
    const response = await fetch('http://localhost:3000/flights', {

        method: "GET",
        //body: JSON.stringify(params),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    const flights = await response.json();
    console.log(flights);
}