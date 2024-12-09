const hora = document.getElementById("hora");
const minuto = document.getElementById("minutos");
const segundo = document.getElementById("segundos");

const relogio = setInterval(function  time(){
let hoje = new Date();
let h = hoje.getHours();
let m = hoje.getMinutes();
let s = hoje.getSeconds();

if (h < 10) h = '0' + h;
if (m < 10) m = '0' + m;
if (s < 10) s = '0' + s;

hora.textContent = h;
minuto.textContent = m;
segundo.textContent = s;
})