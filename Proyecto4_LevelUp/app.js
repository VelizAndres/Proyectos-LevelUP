function getRandomInt() {
  return Math.floor((Math.random() * 897) + 1);
}


const CargarValores = async () => {
  try {
    let Listados = []
    for (i = 1; i <= 6; i++) {
      let Consulta = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomInt())
      if (Consulta.status === 200) {
        let Rest = await Consulta.json()
        Listados.push(Rest)
        console.log(Rest)

      }
      else {
        console.log('Error')
      }
    }
    setValores(Listados)
  }
  catch (error) {
    console.log(error)
  }
}

function setValores(Listados) {
  console.log(Listados)

  for (i = 0; i < 6; i++) {

    let valor = Listados[i].name[0].toUpperCase() + Listados[i].name.substring(1);
    document.getElementById('Nombre' + (i + 1)).innerText = valor
    document.getElementById('Img' + (i + 1)).src = Listados[i].sprites.front_default
    for (j = 0; j < 6; j++) {
      let Estadistica = Listados[i].stats[j].stat.name[0].toUpperCase() + Listados[i].stats[j].stat.name.substring(1);
      document.getElementById((i + 1) + 'Stat' + j).innerText = Estadistica
      document.getElementById((i + 1) + 'Valores' + j).innerText = Listados[i].stats[j].base_stat
    }
  }
}

CargarValores()
