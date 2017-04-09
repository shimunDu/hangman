var leftArmHtml = '<div class=\'leftarm\'></div>';
var rightArmHtml = '<div class=\'rightarm\'></div>';
var torsoHtml = '<div class=\'torso\'></div>';
var leftLegHtml = '<div class=\'leftleg\'></div>';
var rightLegHtml = '<div class=\'rightleg\'></div>';
var pelvisHtml = '<div class=\'pelvis\'></div>';
var headHtml = '<div class=\'head\'> </div>';

var brojPromasaja = 0;
var maxBrojPromasaja = 7;

function ispisiPoljeNepogodenih() {
    document.getElementById('hangman_print').innerHTML = poljeNepogodenih.join(" ");
}



function hangmanSubmit(form) {

    var input = form.inputbox.value;
    updateajPoljeNepogodenih(input);
    ispisiPoljeNepogodenih();
    iscrtajCoeka();

}

function iscrtajCoeka() {

    if (0 == brojPromasaja)
        return;

    //crtaj glavu
    document.getElementById("headPlaceholder").innerHTML = headHtml;

    //ako je broj promasaja samo jedan prekidaj funkciju nakon
    //isctavanja glave
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
      setTimeout(function() { alert("*******Popusio si************"); },
      1000);
    }



}


function updateajPoljeNepogodenih(novoSlovo) {

    var brojNepogodenihSlovaNaPocetku = brojNepogodenihSlova;
    for (var i = 0; i < film.length; i++) {
        if (novoSlovo == film[i]) {
            poljeNepogodenih[i] = film[i];
            --brojNepogodenihSlova;
        }
    }

    if (brojNepogodenihSlova == brojNepogodenihSlovaNaPocetku) {
        brojPromasaja++;
    }
}

document.getElementById("id1")
    .addEventListener("keypress", function(event) {

        if (event.keyCode == 13) {

            document.getElementById("id2").click();
            event.preventDefault();
            document.getElementById('id1').value = "";

        }
    });



var film = "skafisnjafskaf";

var poljeNepogodenih = [];

var brojNepogodenihSlova = film.length;


for (var i = 0; i < film.length; i++) {
    poljeNepogodenih[i] = "_";

}

ispisiPoljeNepogodenih();
// do {
//     var slovo = prompt("Unesite slove, trenutno stanje:" + ispisi());
//
// } while (!jeliKompletanTekst(slovo));
