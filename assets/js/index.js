//Definir objetos que van a ser utilizados en el template.
const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

//Definir variables a utilizar
var total = document.querySelector('#total');
var boton = document.querySelector("#boton");
var main = document.querySelector("#main");

//definir variables de los inputs al iniciar (vacías).
var num11 = document.querySelector('#num');
var num10 = num11.value;
var min11 = document.querySelector('#min');
var min10 = min11.value;
var max11= document.querySelector('#max');
var max10 = max11.value;

//Imprimir todos los objetos al ejecutar la web con los inputs vacíos. 
if (num10 == "" || min10 == "" || max10 == "") {
  imprimir_todos_los_resultados();
}

//Generar el evento del botón para realizar los cálculos.
boton.addEventListener("click", function () {
  calcular_total();
});

//Función que inicia el cálculo de los procesos a llamar.

function calcular_total() {
  var num1 = document.querySelector('#num');
  var num = num1.value;
  var min1 = document.querySelector('#min');
  var min = min1.value;
  var max1 = document.querySelector('#max');
  var max = max1.value;

  //Determinar si faltan inputs por completar, no puede quedar ni uno vacío.
  if (num == "" || min == "" || max == "") {
    alert("Faltan campos por llenar.")
    imprimir_todos_los_resultados();
  }
  else {
    //En caso de que ninguno esté vacío buscar resultados 
    buscar_resultados(num, min, max);
  }

}

//Función que recorre el objeto y determina si la cantidad de piezas y el mínimo y máximo de metros corresponde con lo buscado. 

function buscar_resultados(num, min, max) {
  var cont = 0;
  var html = "";
  //Recorrer el arreglo de propiedades
  for (let propiedad of propiedades) {
    //Determinar si la propiedad dentro del recorrido cumple las condiciones solicitadas.
    if (propiedad.rooms == num && propiedad.m >= min && propiedad.m <= max) {

      cont = cont + 1;

      let name = propiedad.name;
      let description = propiedad.description;
      let src = propiedad.src;
      let rooms = propiedad.rooms;
      let m = propiedad.m;

      html += imprimir_propiedad(name, description, src, rooms, m);
    }

  }
  total.innerHTML = cont;
  main.innerHTML = html;
}

//función que imprime todas las propiedades. Se utiliza al ejecutar la web por primera vez. Para que se vean todos los resultados antes de realizar la búsqueda

function imprimir_todos_los_resultados() {
  var cont = 0;
  var html = "";

  //Recorrer el arreglo de propiedades
  for (let propiedad of propiedades) {

    cont = cont + 1;
    let name = propiedad.name;
    let description = propiedad.description;
    let src = propiedad.src;
    let rooms = propiedad.rooms;
    let m = propiedad.m;
    html += imprimir_propiedad(name, description, src, rooms, m);

  }
  total.innerHTML = cont;
  main.innerHTML = html;
}

//Función que imprime la propiedad, dado los datos de un objeto a través de interpolación en un template.   

function imprimir_propiedad(name, description, src, rooms, m) {
  var html = `
  <div class="columna col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div class="card">
          <div class="image"><img src="${src}"></div>
          <div class="title">${name}</div>
          <div class="value">
              <div class="d-flex justify-content-evenly">
                  <p>Cuartos: ${rooms}</p>
                  <p>Metros: ${m}</p>
              </div> 
          </div>
          <div class="content">${description}</div>
          <div class="link">
          <button type="submit">Ver más</button>
          </div>
      </div>
    </div>
  `;
  return html;
}