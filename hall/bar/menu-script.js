// components...

class Components {
    constructor(name, volume, price) {
        this.name = name;
        this.volume = volume;
        this.price = price;
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

class GlassOf {
    constructor(volume, tax) {
        this.volume = 200;
        this.tax = 1.5;
    }
    makeGlassOf(comp) {
        const name = `A glass of ${comp.name}`;
        const price = Math.round((((this.volume * comp.price) / comp.volume) * this.tax) * 10) / 10;
        console.log(name);
        console.log(`${this.volume} ml`);
        console.log(`$${price.toFixed(2)}`);
    }
}
const glassOf = new GlassOf();
glassOf.makeGlassOf(richJuice);
glassOf.makeGlassOf(tonic);
glassOf.makeGlassOf(soda);
glassOf.makeGlassOf(cocaCola);