/* Identifica si una palabra u oración es palindromo o no */

const resultado = (dato) => {
    const original = dato.toLowerCase().replace(/ /g, "")
    const invertida = original.split("").reverse().join("")


    if (invertida === original) {
        return `\n"${dato}" sí es palindromo :D\n`
    } else {
        return `\n"${dato}" no es palindromo D:\n`
    }
}

console.log(resultado(process.argv[2]))