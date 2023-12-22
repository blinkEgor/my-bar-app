document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector("nav").classList.toggle("open");
})

// constants..

const tax = 1.5;
const names = [];
const compounds = [];
const prices = [];

// print...

const printText = (nam, com, pri) => {
    for (let i = 0; i < nam.length; i++) {
        const div = document.createElement("div");
        if(!(nam[i].indexOf('Glass'))) {
            document.getElementById("glass").append(div);
        } else if(!(nam[i].indexOf('Shot'))) {
            document.getElementById("shot").append(div);
        } else {
            document.getElementById("cocktail").append(div);
        }
        div.classList.add("stock");
        const pName = document.createElement("p");
        div.append(pName);
        pName.innerHTML = nam[i];
        const pCompounds = document.createElement("p");
        div.append(pCompounds);
        pCompounds.classList.add("com");
        pCompounds.innerHTML = com[i];
        const pPrice = document.createElement("p");
        div.append(pPrice);
        pPrice.classList.add("pri");
        pPrice.innerHTML = pri[i];
    }
};

// components...

const components = {
    gin: { name: "Gin", volume: 500, price: 14.40 },
    richJuice: { name: "Rich Juice", volume: 1000, price: 4.20 },
    lemonJuice: { name: "Lemon Juice", volume: 1000, price: 10.00 },
    tonic: { name: "Tonic", volume: 1000, price: 2.80 },
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
            const thisCompound = `${gin.name} 50 ml<br>${richJuice.name} 100-200 ml`;
            const total = `$${ (Math.round(((
                (50 * gin.price / gin.volume) + 
                (200 * richJuice.price / richJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    saltyDog: {
        name: `Salty Dog`,
        makeCoctale(gin, richJuice) {
            const thisCompound = `${gin.name} 40 ml<br>${richJuice.name} 100 ml`;
            const total = `$${ (Math.round(((
                (40 * gin.price / gin.volume) + 
                (100 * richJuice.price / richJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    ginAndTonic: {
        name: `Gin & Tonic`,
        makeCoctale(gin, tonic) {
            const thisCompound = `${gin.name} 50 ml<br>${tonic.name} 100-200 ml`;
            const total = `$${ (Math.round(((
                (50 * gin.price / gin.volume) + 
                (200 * tonic.price / tonic.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    ginFizz: {
        name: `Gin Fizz`,
        makeCoctale(gin, lemonJuice, sugarSyrup, soda) {
            const thisCompound = `${gin.name} 45 ml<br>${lemonJuice.name} 30 ml<br>
                ${sugarSyrup.name} 10 ml<br>${soda.name} 100-200 ml`;
            const total = `$${ (Math.round(((
                (45 * gin.price / gin.volume) + 
                (50 * lemonJuice.price / lemonJuice.volume) + 
                (50 * sugarSyrup.price / sugarSyrup.volume) + 
                (200 * soda.price / soda.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    johnCollins: {
        name: `John Collins`,
        makeCoctale(gin, lemonJuice, sugarSyrup, soda) {
            const thisCompound = `${gin.name} 45 ml<br>${lemonJuice.name} 30 ml<br>
                ${sugarSyrup.name} 15 ml<br>${soda.name} 100-200 ml`;
            const total = `$${ (Math.round(((
                (45 * gin.price / gin.volume) + 
                (50 * lemonJuice.price / lemonJuice.volume) + 
                (50 * sugarSyrup.price / sugarSyrup.volume) + 
                (200 * soda.price / soda.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    gibson: {
        name: `Gibson`,
        makeCoctale(gin, dryVermouth) {
            const thisCompound = `${gin.name} 60 ml<br>${dryVermouth.name} 10 ml`;
            const total = `$${ (Math.round(((
                (60 * gin.price / gin.volume) + 
                (10 * dryVermouth.price / dryVermouth.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    capeCod: {
        name: `Cape Cod`,
        makeCoctale(vodka, richJuice) {
            const thisCompound = `${vodka.name} 40 ml<br>${richJuice.name} 100-200 ml`;
            const total = `$${ (Math.round(((
                (40 * vodka.price / vodka.volume) + 
                (200 * richJuice.price / richJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    lemonCandy: {
        name: `Lemon Candy`,
        makeCoctale(vodka, lemonJuice, sugarSyrup) {
            const thisCompound = `${vodka.name} 50 ml<br>${lemonJuice.name} 25 ml<br>
                ${sugarSyrup.name} 10 ml`;
            const total = `$${ (Math.round(((
                (50 * vodka.price / vodka.volume) + 
                (50 * lemonJuice.price / lemonJuice.volume) + 
                (50 * sugarSyrup.price / sugarSyrup.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    martiniVodka: {
        name: `Martini Vodka`,
        makeCoctale(vodka, dryVermouth) {
            const thisCompound = `${vodka.name} 55 ml<br>${dryVermouth.name} 15 ml`;
            const total = `$${ (Math.round(((
                (55 * vodka.price / vodka.volume) + 
                (15 * dryVermouth.price / dryVermouth.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    seaBreeze: {
        name: `Sea Breeze`,
        makeCoctale(vodka, richJuice) {
            const thisCompound = `${vodka.name} 40 ml<br>${richJuice.name} 120-200 ml<br>
                ${richJuice.name} 30-60 ml`;
            const total = `$${ (Math.round(((
                (40 * vodka.price / vodka.volume) + 
                (200 * richJuice.price / richJuice.volume) + 
                (60 * richJuice.price / richJuice.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
    dryMartini: {
        name: `Dry Martini`,
        makeCoctale(gin, dryVermouth) {
            const thisCompound = `${gin.name} 60 ml<br>${dryVermouth.name} 10 ml`;
            const total = `$${ (Math.round(((
                (60 * gin.price / gin.volume) + 
                (10 * dryVermouth.price / dryVermouth.volume)
                ) * tax) * 10) / 10).toFixed(2) }`;
            names.push(this.name);
            compounds.push(thisCompound);
            prices.push(total);
        }
    },
};

cocktails.lemonade.makeCoctale(components.lemonJuice, components.soda, components.sugarSyrup);
cocktails.greyhound.makeCoctale(components.gin, components.richJuice);
cocktails.saltyDog.makeCoctale(components.gin, components.richJuice);
cocktails.ginAndTonic.makeCoctale(components.gin, components.tonic);
cocktails.ginFizz.makeCoctale(components.gin, components.lemonJuice, components.sugarSyrup, components.soda);
cocktails.johnCollins.makeCoctale(components.gin, components.lemonJuice, components.sugarSyrup, components.soda);
cocktails.gibson.makeCoctale(components.gin, components.dryVermouth);
cocktails.capeCod.makeCoctale(components.vodka, components.richJuice);
cocktails.lemonCandy.makeCoctale(components.vodka, components.lemonJuice, components.sugarSyrup);
cocktails.martiniVodka.makeCoctale(components.vodka, components.dryVermouth);
cocktails.seaBreeze.makeCoctale(components.vodka, components.richJuice);
cocktails.dryMartini.makeCoctale(components.gin, components.dryVermouth);

// finish print

console.log(names);
console.log(compounds);
console.log(prices);

printText(names, compounds, prices);

(function() {
    const g = document.getElementById("glass").children;
    const s = document.getElementById("shot").children;
    const c = document.getElementById("cocktail").children;
    for(let i = 1; i < g.length; i++) {
        if(!(i % 2)) {
            g[i].setAttribute("style", "color: rgb(200, 200, 200)");
        }
    } for(let i = 1; i < s.length; i++) {
        if(!(i % 2)) {
            s[i].setAttribute("style", "color: rgb(200, 200, 200)");
        }
    } for(let i = 1; i < c.length; i++) {
        if(!(i % 2)) {
            c[i].setAttribute("style", "color: rgb(200, 200, 200)");
        }
    }
})();