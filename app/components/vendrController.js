import VendrService from "./vendrService.js";

// Private
let vendrService = new VendrService();

function draw() {
    let balance = vendrService.Balance;
    document.getElementById('bal').innerText = balance.toFixed(2);
}

function drawSnacks() {
    let template = "";
    let snacks = vendrService.Snacks
    for(let key in snacks){
        let snack = snacks[key]
        template+= snack.getTemplate()
    }
    document.getElementById('snacks').innerHTML = template;
}

// Public
export default class VendrController {
    constructor() {
        console.log("Building the controller...");
        draw();
        drawSnacks();
    }
    addQuarter() {
        vendrService.addQuarter();
        draw();
    }
    addDollar() {
        vendrService.addDollar();
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