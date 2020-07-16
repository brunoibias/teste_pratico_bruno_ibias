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
console.log(removeRepeated())
export default removeRepeated;

// Teste 3
const lettersSum = (string1, string2) => {
    string1 = 'cgrtsr'
    string2 = 'berGcS'
    var strings1 = string1.toUpperCase().split("").sort();// transforma a string1 converte e um array e ordena em ordem alfabetica
    var strings2 = string2.toUpperCase().split("").sort();// transforma a string2 converte e um array e ordena em ordem alfabetica

    function converte(letras) {//funçao que atribui numeros as letras
        var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var codigos = [];
        for (var i in letras) {
            codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) + 1);
        }
        return codigos;
    }
    var resultado1 = converte(strings1)//variavel que converte a strings1 em nimeros
    for (var i in resultado1) {
        resultado1[i]
    }
    var resultado2 = converte(strings2)//variavel que converte a strings2 em nimeros
    for (var i in resultado2) {
        resultado2[i]
    }
    //retorno =(maiorLetraString1 menorLetraString2 ) + (maiorLetraString2  menorLetraString1)
    const ultimo2 = resultado2[resultado2.length - 1]//costante para encontrar o ultimo elemanto do array
    const ultimo1 = resultado1[resultado1.length - 1]//costante para encontrar o ultimo elemanto do array
    const som1 = (resultado1[0] * ultimo2)+(resultado2[0] * ultimo1)// executa a operaçao
    return som1;
}
console.log(lettersSum())

export default lettersSum;


