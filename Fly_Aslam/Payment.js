import { allowed_seats } from './Details.js';
const allowed_seats = require('./allowed_seats');

window.onload = function() {
    displayCost();
};
function displayCost(){
    console.log("in")
    const section = document.getElementById("selector");
    section.innerHTML = `${allowed_seats * 399}`;
}