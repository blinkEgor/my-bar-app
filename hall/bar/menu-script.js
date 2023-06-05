// constants..

const tax = 1.5;
const names = [];
const compounds = [];
const prices = [];

// print...

const printText = (nam, com, pri) => {
    // for names
    for (let i = 0; i < nam.length; i++) {
        const div = document.createElement("div");
        document.getElementById("content").append(div);
        const pName = document.createElement("p");
        div.append(pName);
        pName.innerHTML = nam[i];
        const pCompounds = document.createElement("p");
        div.append(pCompounds);
        pCompounds.innerHTML = com[i];
        const pPrice = document.createElement("p");
        div.append(pPrice);
        pPrice.innerHTML = pri[i];
    }
    // for compounds
    /*for (let i = 0; i < com.length; i++) {
        const p = document.createElement("p");
        document.getElementById("drink-compound").append(p);
        p.innerHTML = com[i];
    }
    // for price
    for (let i = 0; i < nam.length; i++) {
        const p = document.createElement("p");
        document.getElementById("drink-price").append(p);
        p.innerHTML = pri[i];
    }*/
};

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

const shotOf = ({name, volume, price}) => {
    const thisName = `Shot of ${name}`;
    const thisCompound = `${name} 40 ml`;
    const total = `$${ (Math.round((((40 * price) / volume) * tax) * 10) / 10).toFixed(2) }`;
    names.push(thisName);
    compounds.push(thisCompound);
    prices.push(total);
};

shotOf(components.gin);
shotOf(components.dryVermouth);
shotOf(components.vodka);

// cocktails 

const cocktails = {
    lemonade: {
        name: `Lemonade`,
        makeCoctale(lemonJuice, soda, sugarSyrup) {
            const thisCompound = `${soda.name} 150 ml<br>${sugarSyrup.name} 30 ml<br>${lemonJuice.name} 20 ml`;
            const total = `$${ (Math.round(((
                (200 * soda.price / soda.volume) + 
                (50 * sugarSyrup.price / sugarSyrup.volume) + 
                (50 * lemonJuice.price / lemonJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    greyhound: {
        name: `Greyhound`,
        makeCoctale(gin, richJuice) {
            const thisCompound = `${gin.name} 50 ml<br>${richJuice.name} 200 ml`;
            const total = `$${ (Math.round(((
                (50 * gin.price / gin.volume) + 
                (200 * richJuice.price / richJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    saltyDog: {},
    ginAndTonic: {},
    ginFizz: {},
    johnCollins: {},
    gibson: {},
    capeCod: {},
    lemonCandy: {},
    martiniVodka: {},
    seaBreeze: {},
    dryMartini: {},
};

cocktails.lemonade.makeCoctale(components.lemonJuice, components.soda, components.sugarSyrup);
cocktails.greyhound.makeCoctale(components.gin, components.richJuice);


// finish print

console.log(names);
console.log(compounds);
console.log(prices);

printText(names, compounds, prices);