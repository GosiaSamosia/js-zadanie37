var mojparagraf = document.getElementById("tekst");

var przyciskdodaj = document.querySelector("#dodaj");
document.querySelector("#dodaj").onclick = function() {
    mojparagraf.textContent = "Akademia108";
}

var przyciskusun = document.querySelector("#usun");
document.querySelector("#usun").onclick = function() {
    mojparagraf.textContent = "";
}
    
    
