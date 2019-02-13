export default class Snack {
    constructor(name, price, type, img, location) {
        this.name = name,
        this.price = price,
        this.type = type,
        this.img = img,
        this.location = location
    }
    getTemplate() {
        return `
        <div class="col-6 border">
            <img src="${this.img}" alt="">
            <button style="display: inline-block;" onclick="app.controllers.vendrController.buySnack('${this.location}')">${this.location}</button> <br>
            <h3>${this.price}</h3>
            
        </div>`
    }
}