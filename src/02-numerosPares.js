/* Identifica si un numero es par o impar */

const resultado = (dato) => {
    const numero = parseFloat(dato)

    if(isNaN(numero)) return "\nEscribe un numero!\n"
    
    return (numero % 2 === 0) ? `\nEl número "${numero}" sí es par!\n` : `\nEl número "${numero}" es impar!\n`
}

console.log(resultado(process.argv[2]))