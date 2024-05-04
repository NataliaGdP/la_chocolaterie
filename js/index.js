/*-------------------------
 * index.js
 * Estructura:
 *  - Constantes
 *  - Funciones
 *  - Variables
 *  - Llamadas a la funcion
 *
 */

/*--- ENCABEZADO ---*/
// Elemento del navegador del encabezado
const headerNav = document.querySelector(".header__nav")
// Elemento del boton del encabezado para activar el navegador y que sea visible
const headerBtn = document.querySelector(".header__btn")


/*--- SECCION PRODUCTOS ---*/
// Seleccion de todos los botones del slider
const sliderBtn = document.querySelectorAll('.slider__btn')
// Seleccion de todos las imagenes del slider
const sliderImg = document.querySelectorAll('.slider__img')
// Seleccion de todos las tablas del slider
const sliderTb = document.querySelectorAll('.slider__tb')
// Seleccion de todos los titulos del slider
const sliderH2 = document.querySelectorAll('.slider__h2')

/*--- SECCION TABLETA ---*/
// Elemento del combo que elige el tipo de cacao
const comboCacao = document.querySelector(".cacao_select");
// Elemento del combo que elige el tipo de fruta
const comboFruits = document.querySelector(".fruits_select");
// Elemento del combo que elige el tipo de frutos secos
const comboNuts = document.querySelector(".nuts_select");

// Seleccion de todos las tabletas de cacao
const sliderCacao = document.querySelectorAll('.tablet__cacao')
// Seleccion de todos las tabletas de frutas
const slideFrutas = document.querySelectorAll('.tablet__fruits')
// Seleccion de todos las tabletas de frutos secos
const sliderSecos = document.querySelectorAll('.tablet__nuts')

// Elemento del boton "LISTA" que crea la tableta
const readyBtn = document.querySelector('.button__tablet')
// Elemento presentImg para visualizar la tableta de regalo
const presentImg = document.querySelector('.present__img')
// Elemento de resultado que se vera reflejado en el input del formulario
const result = document.querySelector('.result')


/*--- PIE DE PAGINA ---*/
// Elemento del buton de hamburguesa para visualizar el navegador
const footerBtn = document.querySelector(".footer__btn")
// Elemento del navegador del pie de pagina
const footerNav = document.querySelector(".footer__nav")


/**
 * Declaro la variable position, que la utilizo en las slider de la Seccion Productos
 * y le asigno el valor 1
 */
let posicion = 1

/**
 * Funcion que activa el navegador del header al hacer click sobre el boton 'headerBtn'
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
function setHeaderIsActive(){
    headerNav.classList.toggle('isActive')
}

/**
 * Funcion que activa el navegador del footer al hacer click sobre el boton 'footerBtn'
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
function setFooterIsActive(){
    footerNav.classList.toggle('isActive')
}

/**
 * Funcion que aplica la visibilidad de los componentes de las slider
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */

function showAll() {
    sliderImg.forEach(function(eachTb, index){
        sliderTb[index].classList.remove("isVisible")
        sliderImg[index].classList.remove("isVisible")
        sliderH2[index].classList.remove("isVisible")
        sliderBtn[index].classList.remove("isActive")
    })
    sliderH2[posicion].classList.add("isVisible")
    sliderImg[posicion].classList.add("isVisible")
    sliderTb[posicion].classList.add("isVisible")
    sliderBtn[posicion].classList.add('isActive')
}

/**
 * Funcion que aplica el showAll al hacer click sobre los botones de la slider de la Seccion Productos 
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
sliderBtn.forEach(function(eachBtn, i){
    sliderBtn[i].addEventListener('click', function(){
        posicion = i
        showAll()
    })
})

/**
 * Funcion que aplica la visibilidad de las tabletas de cacao
 * @ param Le paso como parametro el id el comboCacao que este seleccionado
 * @ return No tiene return
 */
function showCacao(idCacao) {
    sliderCacao.forEach(function(eachImg, index){
        sliderCacao[index].classList.remove("isVisible")
    })
    sliderCacao[idCacao].classList.add("isVisible")
}

/**
 * Funcion que aplica al cambiar el combo se queda con indice obtenido de la seleccion y llama a la    funcion showCacao, declarada justo encima para visualizar la tableta de cacao
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
comboCacao.addEventListener('change', () =>{
    let idCacao = comboCacao.selectedIndex;
    presentImg.classList.remove("isVisible");
    showCacao(idCacao)
})

/**
 * Funcion que aplica la visibilidad de las tabletas de frutas
 * @ param Le paso como parametro el id el comboFruit que este seleccionado
 * @ return No tiene return
 */
function showFruit(idFruit) {
    slideFrutas.forEach(function(eachImg, index){
        slideFrutas[index].classList.remove("isVisible")
    })
    slideFrutas[idFruit].classList.add("isVisible")
}

/**
 * Funcion que aplica al cambiar el combo de frutas se queda con indice obtenido de la seleccion y llama a la funcion showFruit, declarada justo encima para visualizar la tableta de frutas
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
comboFruits.addEventListener('change', () =>{
    let idFruit = comboFruits.selectedIndex;
    presentImg.classList.remove("isVisible");
    showFruit(idFruit)
})


/**
 * Funcion que aplica al cambiar el combo de frutos secos se queda con indice obtenido de la seleccion y llama a la funcion showFruit, declarada justo encima para visualizar la tableta de furtos secos
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
comboNuts.addEventListener('change', () =>{
    let idNuts = comboNuts.selectedIndex;
    presentImg.classList.remove("isVisible");
    showNuts(idNuts)
})

/**
 * Funcion que aplica la visibilidad de las tabletas de frutos secos
 * @ param Le paso como parametro el id el comboNuts que este seleccionado
 * @ return No tiene return
 */

function showNuts(idNuts) {
    sliderSecos.forEach(function(eachImg, index){
        sliderSecos[index].classList.remove("isVisible")
    })
    sliderSecos[idNuts].classList.add("isVisible")
}

/**
 * Funcion que aplica al hacer click sobre el boton "LISTO",recorre cada una de las Slider de las tabletas para ir eliminando su visibilidad y dar paso  ala imagen de la tableta, por ultimo obtiene el valos de los combo para formar una frase con los elementos elegidos y mostrarla en un input del formluario
 * @ param No le paso ningun parametro
 * @ return No tiene return
 */
readyBtn.addEventListener("click", () => {
    
    // Recorre todas las slider de cacao y les quita la visibilidad
    sliderCacao.forEach(function(eachImg, index){
        sliderCacao[index].classList.remove("isVisible")
    })
    // Recorre todas las slider de frutas y les quita la visibilidad
    slideFrutas.forEach(function(eachImg, index){
        slideFrutas[index].classList.remove("isVisible")
    })
    // Recorre todas las slider de frutos secos y les quita la visibilidad
    sliderSecos.forEach(function(eachImg, index){
        sliderSecos[index].classList.remove("isVisible")
    })
     // Añade la visibilidad a la imagen de regalo
    presentImg.classList.add("isVisible");

    // Toma los valores de los tres combos 
    let valorCacao = comboCacao.value;
    let valorFruta = comboFruits.value;
    let valorSecos = comboNuts.value;

    // Creamos una frase con esos valores y la devolvemos en un input
    let valorTotal = "Cacao " + valorCacao + ", con " + valorFruta + " y " + valorSecos
    document.form.result.value = valorTotal

})

// Llamo a la funcion setFooterIsActive al hacer click sobre el boton footerBtn
footerBtn.addEventListener("click", setFooterIsActive)

// Llamo a la funcion setHeaderIsActive al hacer click sobre el boton headerBtn
headerBtn.addEventListener("click", setHeaderIsActive)


