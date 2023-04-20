let contador=0;

function Incrementar()
{
    contador++
    Colorear(contador)
}

function Disminuir()
{
    contador--
    Colorear(contador)

}


function Reset()
{
    contador=0
    Colorear(contador)
}

function Colorear(valor)
{
    var etiquetaTexto = document.getElementById("texto");
    etiquetaTexto.innerText = valor
    if(valor==0)
    {
        etiquetaTexto.style = "color: blue"
    }
    else if( valor <0)
    {
        etiquetaTexto.style = "color: red"
    }
    else if( valor > 0)
    {
        etiquetaTexto.style = "color: green"
    }
}