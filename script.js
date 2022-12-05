/*
*TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
? ANALYSIS
1. get DOM element
2. get from user kms amount he is interested to run
3. get user age
4. validation 
5. define travel price:
    Must be considered: 0.21€ * km
                        20% discount for users under 18
                        40% discount for users over 65
6. printing final Price.
*/

//* 1.
const targetElement = document.getElementById("target");
// // console.log(targetElement);

//* 2.
const userKms = parseInt(prompt("Quanti km vuoi percorrere?", 20).trim());
// // console.log(userKms);

//* 3.
const userAge = parseInt(prompt("Quanti anni hai?", 33).trim());
// // console.log(userAge);

//! 4. TO DO

//* 5.
//Price for km
const unitPrice = 0.21;

//User kms Price
const userKmsPrice = unitPrice * userKms;

//Discount under 18 & over 65
const discountYoungPeople = userKmsPrice * 0.2;
const discountOldPoeple = userKmsPrice * 0.4;

// // console.log(unitPrice, userKmsPrice, discountYoungPeople, discountOldPoeple);

let finalPrice = userKmsPrice

if (userAge < 18){
    finalPrice = userKmsPrice - discountYoungPeople;
} else if (userAge > 64) {
    finalPrice = userKmsPrice - discountOldPoeple;
}

// // console.log(finalPrice);

//* 6.
targetElement.innerHTML = `<h1>il prezzo che devi pagare è pari a ${finalPrice} €</h1>`;