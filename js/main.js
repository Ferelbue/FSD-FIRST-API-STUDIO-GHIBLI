const container1 = document.getElementById('container1')

let left = document.getElementsByClassName("carousel-control-prev")
let arrayLeft = Array.from(left)

let rigth = document.getElementsByClassName("carousel-control-next")
let arrayRigth = Array.from(rigth)
let datos = [];
let primera = 0;
let flag = 0;
let vueltas = Math.floor(datos.length / 4)

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
    }
    primera = 1;
    vueltas = 5;
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
          vueltas--;
        }
        primera++;
      }



      // vueltas -= vueltas - 4;
      console.log(vueltas,"dasdasd")
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
          vueltas ++;

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
     
          vueltas ++;
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


