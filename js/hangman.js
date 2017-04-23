/******************************************************************************
****************  DEFINICIJA KORISTENIH VARIJABLI I KONSTANTI
******************************************************************************/
var leftArmHtml = '<div class=\'leftarm\'></div>';
var rightArmHtml = '<div class=\'rightarm\'></div>';
var torsoHtml = '<div class=\'torso\'></div>';
var leftLegHtml = '<div class=\'leftleg\'></div>';
var rightLegHtml = '<div class=\'rightleg\'></div>';
var pelvisHtml = '<div class=\'pelvis\'></div>';
var headHtml = '<div class=\'head\'> </div>';

var brojPromasaja = 0;
var maxBrojPromasaja = 7;

//TODO updateati na neku listu i random birati film iz liste
var film = "teo";
var brojPogodenihSlova = film.length;

var poljeZaIspis = [];

/******************************************************************************
****************     'GLAVNI PROGRAM, KOD SE IZVRSI KOD UCITAVANJE STRANICE
******************************************************************************/
document.getElementById("id1").addEventListener("keypress", function(event) {

        if (event.keyCode == 13) {
            //pozovi hangmanSubmitButton 'click' funkciju
            document.getElementById("id2").click();

            //TODO ovo treba ispitati cemu tocno sluzi
            event.preventDefault();

           //u tekst element u formi postavi prazni string da izbrises uneseni tekst
           document.getElementById('id1').value = "";

        }
    });

for (var i = 0; i < film.length; i++) {
    poljeZaIspis[i] = "_";

}

ispisipoljeZaIspis();

/******************************************************************************
****************     FUNKCIJE        *****************************************
******************************************************************************/
function hangmanSubmit(form) {

    var input = form.inputbox.value;

    updateajpoljeZaIspis(input);
    ispisipoljeZaIspis();
    iscrtajCoeka();

    //TODO  dodaj jos ako korisnik pogodi sva slova da iskoci neki alert

}

function updateajpoljeZaIspis(novoSlovo) {

    var brojPogodenihSlovaNaPocetkuPozivaFunkcije = brojPogodenihSlova;

    for (var i = 0; i < film.length; i++) {


        if (novoSlovo == film[i]) {
            poljeZaIspis[i] = film[i];
            --brojPogodenihSlova;
        }
    }

    if (brojPogodenihSlova == brojPogodenihSlovaNaPocetkuPozivaFunkcije) {
        brojPromasaja++;
    }
}

function ispisipoljeZaIspis() {

    var poljeZaIspisKaoString = poljeZaIspis.join(" ");
    document.getElementById('hangman_print').innerHTML = poljeZaIspisKaoString;
}

function iscrtajCoeka() {

    if (0 == brojPromasaja)
        return;

    document.getElementById("headPlaceholder").innerHTML = headHtml;

    if (1 == brojPromasaja)
        return;

    armboxElements = document.getElementsByClassName("armbox");
    armboxElements[0].innerHTML = rightArmHtml;

    if (2 == brojPromasaja)
        return;

    armboxElements[0].innerHTML += leftArmHtml;

    if (3 == brojPromasaja)
        return;

    armboxElements[0].innerHTML += torsoHtml;

    if (4 == brojPromasaja)
        return;

    legElements = document.getElementsByClassName("legbox");
    legElements[0].innerHTML = pelvisHtml;

    if (5 == brojPromasaja)
        return;

    legElements[0].innerHTML += leftLegHtml;

    if (6 == brojPromasaja)
        return;

    legElements[0].innerHTML += rightLegHtml;

    if (7 == brojPromasaja) {
        setTimeout(function() {
                alert("*******Popusio si************");},
                1000);
              }
    //TODO nakon 7.promasaja dodaj jos restart, gdje ce
    //se sve varijable ponistiti na pcetne vrijednosti i igrica se moze igrati ponovo


}
