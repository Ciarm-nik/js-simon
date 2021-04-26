// Un alert() espone 5 numeri generati casualmente.

var numeriCasuali = [];
var listaNumPrompt = []
var numeroCasuale;
var numPrompt;

for (var i = 0; i < 5; i++) {
    numeroCasuale = genNumeriCasuali(1, 100);
    console.log(numeroCasuale);
    numeriCasuali.push(numeroCasuale);
}
console.log(numeriCasuali)
alert("Memorizza questi numeri!!!   " + numeriCasuali);

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(function () {
    for (var i = 0; i < 5; i++) {
        numPrompt = parseInt(prompt("Inserisci i numeri!"));
        for (var j = 0; j < numeriCasuali.length; j++) {
            if (numPrompt == numeriCasuali[j]) {
                listaNumPrompt.push(numPrompt);
            }
    }

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    }

    // Creo un alert per dire i numeri indovinati dall'utente
    alert("Hai indovinato " + listaNumPrompt.length + " numeri. Ecco i numeri indovinati:" + listaNumPrompt)

    console.log("Ecco i numeri indovinati: " + listaNumPrompt)

}, 2000)



function genNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
