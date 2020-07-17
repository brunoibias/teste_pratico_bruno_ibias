/****************************************************
*               CÓDIGO DE BRUNO IBIAS               *
*                                                   *
*                   TESTE PRÁTICO                   *
*                      AURUM                        *
****************************************************/
// Teste 1
const removeRepeated = (string, limit) => {
    string = 'xXxyzZaaaYy' // definiçao do parametro string
    limit = 2 // parametro que definr o limite de repetiçoes possiveis
    //transforma todos os elementos da string em caixa baixa 
    const strings = string.toLocaleLowerCase();
    //remove de acordo com a definiçao do limit
    const defLimit = s => s.split("").reduce((a, b) => (a[a.length - limit] != b) ? (a + b) : a, "")
    return (defLimit(strings));
}
console.log('A string fica assim:',removeRepeated())
export default removeRepeated;

// Teste 2
const replaceChar = (string, times) => {
    string = "?x?yzza?y" // definiçao do parametro string
   times = 3 // parametro que definr a quantidade de repetiçoes a ser realizadas
    var res = string.replace(/[?]/gi, "j".repeat(times));//substitui todos os ? quantas vezes o times indicar
    return res;
}
console.log(replaceChar())
export default replaceChar;

// Teste 3
const lettersSum = (string1, string2) => {
    string1 = 'cgrtsr' // definiçao primeiro do parametro string
    string2 = 'berGcS' // definiçao segundo do parametro string
    var strings1 = string1.toUpperCase().split("").sort();// transforma a string1 converte e um array e ordena em ordem alfabetica
    var strings2 = string2.toUpperCase().split("").sort();// transforma a string2 converte e um array e ordena em ordem alfabetica
    console.log("A string1 ordenada ficou assim:", strings1)
    console.log("A string2 ordenada ficou assim:", strings2)

    function converte(letras) {//funçao que atribui numeros as letras
        var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var codigos = [];
        for (var i in letras) {
            codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) + 1);
        }
        console.log(codigos)
        return codigos;
    }
    var resultado1 = converte(strings1)//variavel que converte a strings1 em numeros
    for (var i in resultado1) {
        resultado1[i]
    }
    var resultado2 = converte(strings2)//variavel que converte a strings2 em numeros
    for (var i in resultado2) {
        resultado2[i]
    }

    const ultimo2 = resultado2[resultado2.length - 1]//costante para encontrar o ultimo elemanto do array
    const ultimo1 = resultado1[resultado1.length - 1]//costante para encontrar o ultimo elemanto do array
    const som1 = (resultado1[0] * ultimo2)+(resultado2[0] * ultimo1)// executa a operaçao
    return som1;
}
console.log('O resultado de (maiorLetraString1 X menorLetraString2 ) + (maiorLetraString2 X menorLetraString1) é:',lettersSum())
export default lettersSum;


