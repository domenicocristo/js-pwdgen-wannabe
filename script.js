let name = prompt ("Come ti chiami?");

let lastname = prompt("qual'è il tuo cognome?");

let color = prompt("qual'è il tuo colore preferito?");

let password = name + lastname + color;

document.getElementById("password").innerHTML = `La password assegnata è: ${password}`;