/* PARTE IV:  */
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
/* DEFINIR EL ESTILO DE CADA UNO DE LOS DIVS A UTILIZAR */
container1.setAttribute("style","width:200px;height:200px;background-color:yellow");
container2.setAttribute("style","width:200px;height:200px;background-color:yellowgreen");
container3.setAttribute("style","width:200px;height:200px;background-color:red");
container4.setAttribute("style","width:200px;height:200px;background-color:blue");
/* DEFINIR COLOR A USAR SEGUN TECLA PRESIONADA */
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        bgcolor = 'black'
    } else if (event.key === 's') {
        bgcolor = 'cyan'
    } else if (event.key === 'd') {
        bgcolor = 'brown'
    }
});
/* DEFINIR EL CAMBIO DE COLOR AL EVENTO DEL CLICK */
container1.addEventListener('click', () => container1.style.backgroundColor = bgcolor);
container2.addEventListener('click', () => container2.style.backgroundColor = bgcolor);
container3.addEventListener('click', () => container3.style.backgroundColor = bgcolor);
container4.addEventListener('click', () => container4.style.backgroundColor = bgcolor);