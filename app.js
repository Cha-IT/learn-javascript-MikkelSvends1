// oppgave 1
let navn = prompt("skriv in navnet ditt");

document.write("hei "+ navn)

// Oppgave 2

let tall1 = prompt("Skriv inn et tall")
let tall2 = prompt("Skriv inn et tall igjen")

document.write(tall1 + tall2)
document.write(tall1 - tall2)
document.write(tall1 * tall2)
document.write(tall1 / tall2)

//oppgave 3

let alder = prompt("Du må skrive inn alderen for å få sprit")

if(alder < 18){
    document.write("For ung ingen sprit for deg")
}
else
{
    document.write("Du har tilgang til sprit")
}

// oppgave 4

let alderTilBuss = prompt("Skriv in alderen din for hvilken billet du for")

if(alder<18)
{
    document.write("barne billet")
}
else if (alder>18 && alder < 67){
document.write("voksen billet")
}
else if(alder>=67){
document.write("honnør billet")
}


