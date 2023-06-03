// constants..

const tax = 1.5;
const drinkName = document.getElementById("drink-name");
const drinkCompound = document.getElementById("drink-compound");
const drinkPrice = document.getElementById("drink-price");
const names = [];
const compounds = [];
const prices = [];

// print...



// components...

const components = {
    gin: { name: "Gin", volume: 500, price: 11.60 },
    richJuice: { name: "Rich Juice", volume: 1000, price: 4.00 },
    lemonJuice: { name: "Lemon Juice", volume: 1000, price: 10.00 },
    tonic: { name: "Tonic", volume: 1000, price: 3.40 },
    soda: { name: "Soda", volume: 1000, price: 1.90 },
    sugarSyrup: { name: "Sugar Syrup", volume: 1500, price: 4.50 },
    vodka: { name: "Vodka", volume: 500, price: 9.80 },
    dryVermouth: { name: "Dry Vermouth", volume: 500, price: 33.00 },
    cocaCola: { name: "Coca Cola", volume: 2000, price: 4.70 },
};

// glass of drink...

const glassOf = ({name, volume, price}) => {
    const thisName = `Glass of ${name}`;
    const thisCompound = `${name} 200 ml`;
    const total = `$${ (Math.round((((200 * price) / volume) * tax) * 10) / 10).toFixed(2) }`;
    names.push(thisName);
    compounds.push(thisCompound);
    prices.push(total);
};

glassOf(components.richJuice);
glassOf(components.tonic);
glassOf(components.soda);
glassOf(components.cocaCola);

console.log(names);
console.log(compounds);
console.log(prices);

