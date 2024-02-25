const container1 = document.getElementsByClassName('container1')
let arrayCont1 = Array.from(container1)
const container2 = document.getElementsByClassName('container2')
let arrayCont2 = Array.from(container2)
const container3 = document.getElementsByClassName('container3')
let arrayCont3 = Array.from(container3)
const container4 = document.getElementsByClassName('container4')
let arrayCont4 = Array.from(container4)
const container5 = document.getElementsByClassName('container5')
let arrayCont5 = Array.from(container5)
const container6 = document.getElementsByClassName('container6')
let arrayCont6 = Array.from(container6)
const container7 = document.getElementsByClassName('container7')
let arrayCont7 = Array.from(container7)
const container8 = document.getElementsByClassName('container8')
let arrayCont8 = Array.from(container8)
let info = "";
let left = document.getElementsByClassName("carousel-control-prev")
let arrayLeft = Array.from(left)

let rigth = document.getElementsByClassName("carousel-control-next")
let arrayRigth = Array.from(rigth)
let datos = [];
let primera = 0;
let flag = 0;
let vueltas = Math.floor(datos.length / 4)
let imgScreen = [];


fetch("https://ghibliapi.vercel.app/films")
  .then((response) => {

    return response.json();
  })

  .then((response) => {
    response.forEach(element => {
      datos.push(element);

    });

    for (let i = 1; i < 5; i++) {
      const image = document.getElementById(`img${i}`)
      image.src = datos[i].image
      const text = document.getElementById(`titulo${i}`)
      text.textContent = datos[i].original_title
      const text2 = document.getElementById(`titulo${i}1`)
      text2.textContent = datos[i].title
    }
    primera = 1;
    vueltas = 5;

    let select = document.getElementById("movieList");
    for (let i = 1; i < datos.length; i++) {

      option = document.createElement("option");
      option.value = datos[i].title;
      option.text = datos[i].title;
      select.appendChild(option);

    }
  })

  .catch((error) => console.log(error.message));



arrayLeft.map(
  item => {
    item.addEventListener("click", (evento) => {
      if (flag === 0) {
        vueltas = 20;
        flag++;
      }

      if (primera === 1) {

        console.log(vueltas)
        for (let i = 5; i < 9; i++) {

          console.log("PRIMERA")
          const image = document.getElementById(`img${i}`)
          image.src = datos[vueltas].image
          const text = document.getElementById(`titulo${i}`)
          text.textContent = datos[vueltas].original_title
          const text2 = document.getElementById(`titulo${i}1`)
          text2.textContent = datos[vueltas].title
          vueltas--;
        }
        primera--;
      } else {
        console.log(vueltas)

        if (vueltas <= 3) {
          vueltas = 16;
        }
        for (let i = 1; i < 5; i++) {

          console.log("SEGUNDA")
          const image = document.getElementById(`img${i}`)
          image.src = datos[vueltas].image
          const text = document.getElementById(`titulo${i}`)
          text.textContent = datos[vueltas].original_title
          const text2 = document.getElementById(`titulo${i}1`)
          text2.textContent = datos[vueltas].title
          vueltas--;
        }
        primera++;
      }



      // vueltas -= vueltas - 4;
      console.log(vueltas, "dasdasd")
      if (vueltas <= 4) {
        vueltas = 17;
      }
      console.log(vueltas)
    })
  })




arrayRigth.map(
  item => {
    item.addEventListener("click", (evento) => {
      console.log(vueltas)


      if (primera === 1) {
        if (vueltas > 17) {
          vueltas = 0;
        }
        for (let i = 5; i < 9; i++) {
          console.log(datos[i])
          const image = document.getElementById(`img${i}`)
          image.src = datos[vueltas].image
          const text = document.getElementById(`titulo${i}`)
          text.textContent = datos[vueltas].original_title
          const text2 = document.getElementById(`titulo${i}1`)
          text2.textContent = datos[vueltas].title
          vueltas++;

        }
        // vueltas += 4;
        primera--;
      } else {
        if (vueltas > 16) {
          vueltas = 0;
        }
        for (let i = 1; i < 5; i++) {
          const image = document.getElementById(`img${i}`)
          image.src = datos[vueltas].image
          const text = document.getElementById(`titulo${i}`)
          text.textContent = datos[vueltas].original_title
          const text2 = document.getElementById(`titulo${i}1`)
          text2.textContent = datos[vueltas].title
          vueltas++;
        }
        // vueltas += 4;
        primera++;
      }

      if (vueltas >= 21) {
        vueltas = 0;
      }

      console.log(vueltas)

    })
  })


arrayCont1.map(
  item => {
    item.addEventListener("click", (evento) => {


      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont1[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }

    })
  })

arrayCont2.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont2[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }

    })
  })
arrayCont3.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont3[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }
    })
  })
arrayCont4.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont4[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          console.log(arrayCont1[0].childNodes[1].childNodes[3].innerHTML)
          $('#exampleModal').modal('show');


        }
      }
    })
  })
arrayCont5.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont5[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }
    })
  })
arrayCont6.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont6[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }
    })
  })
arrayCont7.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont7[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }
    })
  })
arrayCont8.map(
  item => {
    item.addEventListener("click", (evento) => {

      for (let i = 1; i < datos.length; i++) {

        if ((datos[i].title) === (arrayCont8[0].childNodes[1].childNodes[3].innerHTML)) {

          document.getElementById("prueba").innerHTML = datos[i].description
          document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
          $('#exampleModal').modal('show');


        }
      }
    })
  })

document.getElementById('prueba2').addEventListener('click', function () {
  var select = document.getElementById("movieList");

  for (let i = 1; i < datos.length; i++) {
    
    if ((datos[i].title) === (select.value)) {

      document.getElementById("prueba").innerHTML = datos[i].description
      document.getElementById("exampleModalLabel").innerHTML = datos[i].title.toUpperCase()
      $('#exampleModal').modal('show');

    }
  }
});





