function ispisiPoljeNepogodenih() {
    document.getElementById('hangman_print').innerHTML = poljeNepogodenih.join(" ");
}

function hangmanSubmit(form) {

    var input = form.inputbox.value;
    updateajPoljeNepogodenih(input);
    ispisiPoljeNepogodenih();
}

function updateajPoljeNepogodenih(novoSlovo){

  for(var i = 0; i<film.length;i++){
    if(novoSlovo==film[i]){
      poljeNepogodenih[i] = film [i];
      --brojNepogodenihSlova;
    }
  }
}

document.getElementById("id1")
    .addEventListener("keypress", function(event) {

    if (event.keyCode == 13) {

        document.getElementById("id2").click();
        event.preventDefault();
         document.getElementById('id1').value = "";
        console.log("hello5");
    }
});



var film = "The Warriors";

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
