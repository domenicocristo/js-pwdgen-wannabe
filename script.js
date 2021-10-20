let name = prompt ("Come ti chiami?");

let lastname = prompt("qual'è il tuo cognome?");

let color = prompt("qual'è il tuo colore preferito?");

let year = ("21");

let password = name + lastname + color + year;

document.getElementById("password").innerHTML = `La password assegnata è: ${password}`;