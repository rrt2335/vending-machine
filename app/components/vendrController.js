import VendrService from "./vendrService.js";

// Private
let vendrService = new VendrService();

function draw() {
    let balance = vendrService.Balance;
    document.getElementById('bal').innerText = balance.toFixed(2);
}

// Public
export default class VendrController {
    constructor() {
        console.log("Building the controller...");
        draw();
    }
    addQuarter() {
        vendrService.addQuarter();
        draw();
    }
    returnCoins() {
        vendrService.returnCoins();
        draw();
    }
    buySnack(vendNumber) {
        vendrService.buySnack(vendNumber);
        draw();
    }
}