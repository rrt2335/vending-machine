import Snack from "./snack.js";

export default class VendingMachine {
    constructor() {
        this.balance = 0
        this.snacks = {
            a1: new Snack("Skittles", 2.25, "candy", "https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg"),
            a2: new Snack("Lays", 1.75, "chips", "https://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2"),
            a3: new Snack("Jack Links", 3.00, "jerky", "https://i5.wal.co/asr/1cfb840a-d3ae-476e-8231-f325f613ef55_2.92a65f9be376cd0207f1bcbd76f57b32.png-0de6bda931102c30afd33a74e6f81f94fe8bcf73-crushed-450x450.png"),
            b1: new Snack("M&Ms", 2.00, "candy", "https://images-na.ssl-images-amazon.com/images/I/612RVzTTy0L._SY355_.jpg"),
            b2: new Snack("Twix", 2.25, "candy", "https://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2"),
            b3: new Snack("Doritos", 1.75, "chips", "https://www.doritos.com/sites/doritos.com/files/styles/product_thumbnail/public/2018-08/new-nacho-cheese.png?itok=DBzG_5v6")
        }
    }
}