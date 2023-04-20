function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }

function CambiarColor()
{
    let valores = []
    valores.push(getRandomInt())
    valores.push(getRandomInt())
    valores.push(getRandomInt())
    let colorin = 'background-color: rgb(' + valores[0] +' ' +  valores[1] +' '+  valores[2] +')'
    document.body.style = colorin
    let valor = document.getElementById('texto')
    valor.innerText = '#'+ valores[0].toString(16).toUpperCase().padStart(2,"0")+ valores[1].toString(16).toUpperCase().padStart(2,"0")+ valores[2].toString(16).toUpperCase().padStart(2,"0")
}