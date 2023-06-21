'use strict';
/*
 *  APELLIDOS
 */

class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
    }
  }

  let productos = [
    new Producto(
      1,
      'Cabernet Sauvignon',
      'Cuerpo completo, grosella negra, especias, taninos firmes.',
      10,
      'img/ejemplo.png',
      'Tinto'
    ),
    new Producto(
        2,
        'Merlot',
        'Suave, afrutado, ciruela, chocolate, vainilla.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        3,
        'Pinot Noir',
        'Elegante, ligero, frutos rojos, tierra, especias.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        4,
        'Syrah',
        'Audaz, especiado, moras, pimienta, notas ahumadas.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        5,
        'Malbec',
        'Robusto, frutado, ciruela, zarzamora, taninos firmes.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        6,
        'Tempranillo',
        'España, cereza, cuero, vainilla, acidez equilibrada.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        7,
        'Sangiovese',
        'Italiano, cereza, ciruela, hierbas, taninos moderados.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        8,
        'Zinfandel',
        'Rico, afrutado, moras, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        9,
        'Carmenere',
        'Chile, pimientos rojos, frutos oscuros, especias, textura suave.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        10,
        'Nebbiolo',
        'Italiano, cereza, rosa, regaliz, taninos astringentes.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        11,
        'Grenache',
        'Medio cuerpo, frutos rojos, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        12,
        'Petite Sirah',
        'Intenso, robusto, arándanos, ciruelas, chocolate, especias.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        13,
        'Chardonnay',
        'Cuerpo, manzana, pera, melocotón, roble, mantequilla.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        14,
        'Sauvignon Blanc',
        'Refrescante, cítricos, hierbas, maracuyá, notas herbáceas.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        15,
        'Riesling',
        'Aromático, ácido, frutas tropicales, cítricos, toques minerales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        16,
        'Pinot Grigio',
        'Seco, ligero, pera, manzana, cítricos, almendra.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        17,
        'Gewürztraminer',
        'Fragante, lichis, rosas, especias, sabores tropicales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        18,
        'Chenin Blanc',
        'Versátil, melocotón, pera, miel, acidez refrescante.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        19,
        'Viognier',
        'Exuberante, albaricoque, melocotón, flores blancas, toque especiado.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        20,
        'Albariño',
        'Fresco, crujiente, cítricos, melocotón, mariscos, final salino.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        21,
        'Grüner Veltliner',
        'Austria, pimienta blanca, cítricos, notas herbáceas, acidez vibrante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        22,
        'Muscadet',
        'Francia, limpio, fresco, notas cítricas, mariscos, final mineral.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        23,
        'Vermentino',
        'Ligero, cítricos, melón, hierbas, mariscos, acidez brillante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        24,
        'Sémillon',
        'Notas cítricas, melocotón, miel, cuerpo medio, acidez equilibrada.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto( 
        25,
        'Rosé de Provence',
        'Provenza, fresco, frutos rojos, notas florales, equilibrado.',
        30,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        26,
        'White Zinfandel',
        'Afrutado, dulce, fresas, frambuesas, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        27,
        'Shiraz Rosado',
        'Especiado, frutas rojas, cuerpo medio, acidez refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        28,
        'Garnacha Rosado',
        'Frutos rojos, fresco, especiado, toque dulce, versátil.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        29,
        'Pinot Noir Rosado',
        'Delicado, frutos rojos, floral, acidez brillante, ligero.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        30,
        'Cabernet Sauvignon Rosado',
        'Elegante, grosella negra, especias, cuerpo medio, refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        31,
        'Cinsault Rosado',
        'Ligero, fresco, frutas rojas, floral, acidez suave.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        32,
        'Sangiovese Rosado',
        'Italiano, cereza, especias, cuerpo medio, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        33,
        'Tempranillo Rosado',
        'España, fresas, frutas rojas, especias, acidez equilibrada.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        34,
        'Malbec Rosado',
        'Frutas rojas, floral, especiado, acidez refrescante, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        35,
        'Merlot Rosado',
        'Suave, frutos rojos, notas herbáceas, equilibrado, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        36,
        'Grenache Rosado',
        'Fresco, frutos rojos, especias, toque dulce, versátil.',
        12,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto( 
        37,
        'Champagne',
        'Prestigioso, burbujas finas, manzana, brioche, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        38,
        'Cava',
        'España, burbujas, manzana, pera, tostado, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        39,
        'Prosecco',
        'Italia, burbujas, melocotón, pera, ligero, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        40,
        'Franciacorta',
        'Italiano, burbujas, manzana, pera, pan tostado, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        41,
        "Moscato d'Asti",
        'Dulce, aromático, notas de albaricoque y flores, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        42,
        'Lambrusco',
        'Italiano, semidulce, frutos rojos, burbujas, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        43,
        'Crémant de Loire',
        'Francés, burbujas, manzana, cítricos, fresco, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        44,
        'Sekt',
        'Alemán, burbujas, manzana, cítricos, refrescante, seco o dulce.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        45,
        ' English Sparkling Wine',
        'Inglaterra, burbujas, manzana, cítricos, elegante, creciente calidad.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        46,
        'Blanquette de Limoux',
        'Francés, burbujas, manzana, pera, fresco, más asequible.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        47,
        'Asti Spumante',
        'Italiano, burbujas, albaricoque, melocotón, dulce, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        48,
        "Cremant d'Alsace",
        'Francés, burbujas, manzana, pera, pan tostado, elegante.',
        120,
        'img/ejemplo.png',
        'Espumoso',
    ),
];



function generarCardsPorCategoria(categoria, containerId) {
    const container = document.getElementById(containerId);
    while (container.firstChild) {
        container.firstChild.remove(); // Limpiar el contenedor antes de agregar nuevas tarjetas
    }

    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');

        const circulo = document.createElement('div');
        circulo.classList.add('circulo');
        const imagen = document.createElement('img');
        imagen.setAttribute('src', producto.imagen);
        circulo.appendChild(imagen);

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');

        const nombre = document.createElement('h4');
        nombre.appendChild(document.createTextNode(producto.nombre));

        const precio = document.createElement('p');
        precio.classList.add('precio');
        precio.appendChild(document.createTextNode(`$${producto.precio}`));

        const categoriaElement = document.createElement('p');
        categoriaElement.appendChild(document.createTextNode(producto.categoria));

        const descripcion = document.createElement('p');
        descripcion.appendChild(document.createTextNode(producto.descripcion));

        const agregarCarrito = document.createElement('a');
        agregarCarrito.setAttribute('href', '#');
        agregarCarrito.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito');
        agregarCarrito.setAttribute('data-id', producto.id);
        agregarCarrito.appendChild(document.createTextNode('Agregar al Carrito'));

        infoCard.appendChild(nombre);
        infoCard.appendChild(precio);
        infoCard.appendChild(categoriaElement);
        infoCard.appendChild(descripcion);
        infoCard.appendChild(agregarCarrito);

        card.appendChild(circulo);
        card.appendChild(infoCard);

        container.appendChild(card);
    });
}


function generarCards() {
    generarCardsPorCategoria('Tinto', 'slideContainerTintos');
    generarCardsPorCategoria('Blanco', 'slideContainerBlancos');
    generarCardsPorCategoria('Rosado', 'slideContainerRosados');
    generarCardsPorCategoria('Espumoso', 'slideContainerEspumosos');
}


// Llamar a la función para generar las tarjetas de producto
generarCards();


//Cosas y efectos que no tienen que ver con la compra

$(document).ready(function() {
    $('.slideHorizontal').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });
  
  const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
  
  agregarCarritoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent; // Utilizando textContent en lugar de innerHTML
      this.textContent = '<i class="fa-regular fa-circle-check"></i>';
      setTimeout(() => {
        this.textContent = buttonText;
      }, 1000);
    });
  });
  
// Fin de las cosas y efectos que no tienen que ver con la compra






const carritoid = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{
    //atento a cuando se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //eliminar curso en el carrito
    carritoid.addEventListener('click', eliminarCurso);

    //vaciar carrit de compras
    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    //mostrar lista de cursos en carrito de compra al cargar DOM-LS
    document.addEventListener('DOMContentLoaded', leerLS)

}

let contador = 0;

function comprarCurso(e) 
{
    e.preventDefault();
    //delegation para agregar carrito
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        //enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
        contador++; // Incrementar el contador
        document.getElementById('contador-carrito').textContent = contador;
    }    
}

//leer Datos del Curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCurso(infoCurso);
}


// insertar Curso en el carrito
function insertarCurso(curso) {
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}"><i class="fa-regular fa-circle-xmark"></i></a></td>    
    `);
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
  }
  

//eliminar curso del carrito en el DOM
function eliminarCurso(e) 
{
    e.preventDefault();

    let curso, cursoId;

    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    curso = e.target.parentElement.parentElement;
    cursoId = curso.querySelector('a').getAttribute('data-id');   
    eliminarCursoLS(cursoId);
    contador--; // Incrementar el contador
        document.getElementById('contador-carrito').textContent = contador;
}

//vacias Carrito
function vaciarcarrito() 
{

    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }    
    //vaciar carrito  de LS
    vaciarLs();

    return false;    
}

//almacenar curso al LS
function guardarCursoLocalStorage(curso)
{
    let cursos;
    cursos = obtenerCursosLocalStorage();
    //El curso seleccionado se agrega al Array
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


//comprobar que hayan elementos en el LS
function obtenerCursosLocalStorage() 
{
    let cursosLS;
    //comprobamos si no hay naad o es nulo, creamos el array vacío
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];        
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

//pinta los cursos desde LS en el carrito
function leerLS() {
    let cursosLS;
  
    cursosLS = obtenerCursosLocalStorage();
  
    cursosLS.forEach(function(curso) {
      // Construimos el template
      const row = document.createElement("tr");
      row.insertAdjacentHTML("beforeend", `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
      `);
      listaCursos.appendChild(row);
    });
  }
  

//eliminar curso del LS
function eliminarCursoLS(curso) 
{
    let cursosLS;
    //obtnemos el arreglo con los cursos
    cursosLS = obtenerCursosLocalStorage();
    //iteramo para buscar coincidencias y eliminar
    cursosLS.forEach(function(cursoLS, index) {
      if (cursoLS.id === curso) {
        cursosLS.splice(index, 1);
      }
    });

    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}

//eliminar todos los cursos del LS
function vaciarLs() {
    localStorage.clear();
}