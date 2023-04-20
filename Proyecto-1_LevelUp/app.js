//Andres Veliz

function KeysAndValues (elementos)
{
    console.log('Parametro recibido', elementos)
    let claves = Object.keys(elementos).sort()  //Obtiene las llaves y las ordena
    let valores =[]
    //Recorre el arreglo de llaves 
    claves.forEach(key => {
        valores.push(elementos[key])  //Obtiene el valor correspondiente a la llave
    });
    console.log('Claves', claves)
    console.log('Valores', valores)
    return([claves, valores]) //Retorna el arreglo [Keys,Value]
}


let listado = { b:2, c:3, a:1}
let ClaveValor = KeysAndValues(listado)
console.log('Resultado ',ClaveValor)


