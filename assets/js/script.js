/* PARTE III: TRANSFORMAR LA FUNCION PINTAR DADA SACANDO EL ELEMENTO QUE ESTABA ADENTRO DE LA FUNCION */ 

const ele = document.getElementById("ele1");
/* DEFINIMOS COMO BASE UN FONDO VERDE PARA EL DIV */
ele.setAttribute("style","background-color: green");
/* CREAMOS LA FUNCION PINTAR */
let pintar = (elemento, color) => elemento.style.backgroundColor = color;
/* ELEGIMOS EL COLOR AMARILLO */
const setcolor = "yellow";
/* INGRESAMOS LA FUNCION PINTAR EN EL EVENTO DE CLICK */
ele.addEventListener("click", (e) => {
    pintar(ele, setcolor);
});