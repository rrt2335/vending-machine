// Private
import VendingMachine from '../models/vendingMachine.js';

let _vm = new VendingMachine();

//  Public
export default class VendrService {
    constructor() {
        console.log("Building the service...");
    }
    get Snacks() {
        return _vm.snacks;
    }
    get Balance() {
        return _vm.balance;
    }
    addQuarter() {
        if (_vm.balance < 10) { // The machine can only accept a maximum of $10.
            _vm.balance += .25;
        } else {
            alert("The machine cannot accept any more money.")
        }
    }
    returnCoins() {
        if (_vm.balance > 0) {
            _vm.balance = 0;
        } else {
            alert("There are no coins to be returned.")
        }
    }
    buySnack(vendNumber) {
        let snack = _vm.snacks[vendNumber]
        if (_vm.balance >= snack.price) {
            _vm.balance -= snack.price;
            alert(`Enjoy your ${snack.name}!`);
        } else {
            alert(`There is not enough money inserted to purchase this snack. It costs $${snack.price.toFixed(2)}, so you need $${snack.price - _vm.balance} more.`);
        }
    }
}