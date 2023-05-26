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
    constructor(drinkName, drinkCompound, drinkPrice) {
        this.drinkName = drinkName;
        this.drinkCompound = drinkCompound;
        this.drinkPrice = drinkPrice;
        this.volume = 200;
        this.tax = 1.5;
    }
    makeGlassOfName(comp) {
        const el = document.createElement("p");
        this.drinkName.append(el);
        el.innerText = `A glass of ${comp.name}`;
    }
    makeGlassOfCompound(comp) {
        const el = document.createElement("p");
        this.drinkCompound.append(el);
        el.innerText = `${comp.name} ${this.volume} ml`;
    }
    makeGlassOfPrice(comp) {
        const el = document.createElement("p");
        const price = (Math.round((((this.volume * comp.price) / comp.volume) * this.tax) * 10) / 10).toFixed(2);
        this.drinkPrice.append(el);
        el.innerText = `$${price}`;

        console.log(`$${price}`);
    }
    
}
const glassOf = new GlassOf(
    document.getElementById("drink-name"),
    document.getElementById("drink-compound"),
    document.getElementById("drink-price")
);
glassOf.makeGlassOfName(richJuice);
glassOf.makeGlassOfName(tonic);
glassOf.makeGlassOfName(soda);
glassOf.makeGlassOfName(cocaCola);

glassOf.makeGlassOfCompound(richJuice);
glassOf.makeGlassOfCompound(tonic);
glassOf.makeGlassOfCompound(soda);
glassOf.makeGlassOfCompound(cocaCola);

glassOf.makeGlassOfPrice(richJuice);
glassOf.makeGlassOfPrice(tonic);
glassOf.makeGlassOfPrice(soda);
glassOf.makeGlassOfPrice(cocaCola);

// cocktails...

