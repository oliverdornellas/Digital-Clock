const horas = document.getElementById('hors');
const minutos = document.getElementById('min');
const segundos = document.getElementById('segs');


const time = setInterval(function relogio() {
    let dateToday = new Date();
    let hs = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hs < 10 ) hs = '0' + hs;
    if(mn < 10 ) mn = '0' + mn;
    if(s < 10 ) s = '0' + s;

    horas.textContent = hs;
    minutos.textContent = mn;
    segundos.textContent = s;
})


const data = setInterval(function ano() {
    let currentdate = new Date();
    let dia = currentdate.getDate();
    let mes = currentdate.getMonth() + 1;
    let ano = currentdate.getFullYear();
    
    if(dia < 10) dia = '0' + dia;
    if(mes < 10) mes = '0' + mes;

    res.innerHTML = `Hoje é dia ${dia}-${mes}-${ano}`
});

