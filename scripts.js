function resultado() {
let d1 = document.getElementById("dia").value;
let m1 = document.getElementById("mes").value;
let a1 = document.getElementById("año").value;

let fecha = new Date();
let d2 = fecha.getDate();
let m2 = 1 + fecha.getMonth();
let a2 = fecha.getFullYear();
let mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (d1 > d2) {
    d2 = d2 + mes[m2 - 1];
    m2 = m2 - 1;
}
if (m1 > m2) {
    m2 = m2 + 12;
    a2 = a2 - 1;
}
const d = d2 - d1;
const m = m2 - m1;
const a = a2 - a1;

document.getElementById("resultado").innerHTML =
    "Tu edad es " + a + " años, " + m + " meses y " + d + " dias";
}