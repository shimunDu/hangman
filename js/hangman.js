
/******************************************************************************
****************  DEFINICIJA KORISTENIH VARIJABLI I KONSTANTI
******************************************************************************/

//predefinirani HTML tagovi za razne komponente tijela,
// ukupno 7, sto je maksimalni brojPromasaja
var leftArmHtml = '<div class=\'leftarm\'></div>';
var rightArmHtml = '<div class=\'rightarm\'></div>';
var torsoHtml = '<div class=\'torso\'></div>';
var leftLegHtml = '<div class=\'leftleg\'></div>';
var rightLegHtml = '<div class=\'rightleg\'></div>';
var pelvisHtml = '<div class=\'pelvis\'></div>';
var headHtml = '<div class=\'head\'> </div>';

var brojPromasaja = 0;
var maxBrojPromasaja = 7;

//film koji se pogada
//TODO updateati na neku listu i random birati film iz liste
var film = "skafisnjafskaf";
var brojNepogodenihSlova = film.length;

var poljeNepogodenih = [];


/******************************************************************************
****************     'GLAVNI PROGRAM, KOD SE IZVRSI KOD UCITAVANJE STRANICE
******************************************************************************/

//registriraj listenera za enter, da kad
//neko stisne enter poziva istu funkciju ko na click
document.getElementById("hangmanInputText").addEventListener("keypress", function(event) {

        if (event.keyCode == 13) {
            //pozovi hangmanSubmitButton 'click' funkciju
            document.getElementById("hangmanSubmitButton").click();

            //TODO ovo treba ispitati cemu tocno sluzi
            event.preventDefault();

           //u tekst element u formi postavi prazni string da izbrises uneseni tekst
           document.getElementById('hangmanInputText').value = "pero";

        }
    });


//popuni poljeNepogodenih sa praznim crticama u pocetku
for (var i = 0; i < film.length; i++) {
    poljeNepogodenih[i] = "_";

}

//ispis poljeNepogodenih sto ce prvi put rezultirati ispisom broja
//crtica koji je jednak broju slova filma odnosno duljini stringa film
ispisiPoljeNepogodenih();


/******************************************************************************
****************     FUNKCIJE        *****************************************
******************************************************************************/


//nazovimo glavna funkcija koja se poziva na click korisnika na submit button
//i na pritisak tipke enter
function hangmanSubmit(form) {

//dohvati uneseno slovo iz forme
    var input = form.inputbox.value;

    updateajPoljeNepogodenih(input);
    ispisiPoljeNepogodenih();
    iscrtajCoeka();

    //TODO  dodaj jos ako korisnik pogodi sva slova da iskoci neki alert

}

function updateajPoljeNepogodenih(novoSlovo) {

    var brojNepogodenihSlovaNaPocetkuPozivaFunkcije = brojNepogodenihSlova;

    //vrti kroz sva slova trazenog filma i usporeduj da li je trenutno slovo jednako
    //novounesenom slovu
    for (var i = 0; i < film.length; i++) {


        if (novoSlovo == film[i]) {
          //updateaj poljeNepogodenih sa pogodenim slovom i smanje broj nepogodenih
            poljeNepogodenih[i] = film[i];
            --brojNepogodenihSlova;
        }
    }

    //ako je broj nepogodenih slova isti na pocetku funkcije i na kraju
    //znaci da nijedno slovo nije pogodeno i povecaj broj promasaja
    //sto ce utjecati na iscrtajCoeka funkciju da iscrta vise dijelova tijela
    if (brojNepogodenihSlova == brojNepogodenihSlovaNaPocetkuPozivaFunkcije) {
        brojPromasaja++;
    }
}


//funkcija koja ispisuje poljeNepogodenih
//kako se poljeNepogodenih updateata, sve ce manje crtica biti u polju
//i string generiran iz poljeNepogodenih ce biti cjelovitiji
function ispisiPoljeNepogodenih() {

    //kreiraj string iz polja nepogodenih
    var poljeNepogodenihKaoString = poljeNepogodenih.join(" ");

    //ispisi taj string u paragraf sa idem hangman_print
    document.getElementById('hangman_print').innerHTML = poljeNepogodenihKaoString;
}

//ova funckija je malo cudna zasad moze biti bolja
function iscrtajCoeka() {

//ako je broj promasaja 0 nijedan dio covjeka ne treba iscrtati i prekini
//izvodenje funkcije iscrtajCoeka
    if (0 == brojPromasaja)
        return;

    //crtaj glavu
    document.getElementById("headPlaceholder").innerHTML = headHtml;

    //ako je broj promasaja samo jedan prekidaj funkciju nakon
    //isctavanja glave
    if (1 == brojPromasaja)
        return;

    //iscrtaj desnu ruku
    armboxElements = document.getElementsByClassName("armbox");
    armboxElements[0].innerHTML = rightArmHtml;

    //ako je broj promasaja 2 prekidaj funkciju nakon
    //isctavanja glave i desne ruke
    if (2 == brojPromasaja)
        return;

    //iscrtaj lijevu ruku
    armboxElements[0].innerHTML += leftArmHtml;

    //ako je broj promasaja 3 prekidaj funkciju nakon
    //isctavanja glave,desne ruke i lijeve ruke
    if (3 == brojPromasaja)
        return;

    //iscrtaj torzo
    armboxElements[0].innerHTML += torsoHtml;

    //ako je broj promasaja 4 prekidaj funkciju nakon
    //isctavanja glave,desne ruke, lijeve ruke i torza
    if (4 == brojPromasaja)
        return;

    //iscrtaj zdjelicu
    legElements = document.getElementsByClassName("legbox");
    legElements[0].innerHTML = pelvisHtml;

    //ako je broj promasaja 5 prekidaj funkciju nakon
    //isctavanja glave,desne ruke,lijeve ruke, torza i zdjelice
    if (5 == brojPromasaja)
        return;

    //iscrtaj lijevu nogu
    legElements[0].innerHTML += leftLegHtml;

    //ako je broj promasaja 6 prekidaj funkciju nakon
    //isctavanja glave,desne ruke,lijeve ruke, torza, zdjelice i lijeve noge
    if (6 == brojPromasaja)
        return;

    //iscrtaj desnu nogu
    legElements[0].innerHTML += rightLegHtml;

    //ako je broj promasaja 7 prekidaj funkciju nakon
    //isctavanja glave,desne ruke,lijeve ruke, torza, zdjelice. lijeve i desne noge
    //i pozovi alert sa timeoutom da iskoci i rece korisniku da je izgubio
    if (7 == brojPromasaja) {
        setTimeout(function() {
                alert("*******Popusio si************");},
                1000);
              }
    //TODO nakon 7.promasaja dodaj jos restart, gdje ce
    //se sve varijable ponistiti na pcetne vrijednosti i igrica se moze igrati ponovo


}
