// components...

class Components {
    constructor(name, volume, price) {
        name = this.name;
        volume = this.volume;
        price = this.price;
        unit = "ml";
        currency = "$";
    }
}
const gin = new Components("Gin", 500, 11.60);
const richJuice = new Components("Rich Juice", 1000, 4.00);
const lemonJuice = new Components("Lemon Juice", 1000, 10.00);
const tonic = new Components("Tonic", 1000, 3.40);
const soda = new Components("Soda", 1000, 1.90);
const sugarSyrup = new Components("Sugar Syrup", 1500, 4.50);
const vodka = new Components("Vodka", 500, 9.80);
const dryVermouth = new Components("Dry Vermouth", 500, 33.00);
const cocaCola = new Components("Coca Cola", 2000, 4.70);

// glass of drink...