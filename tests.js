// Teste 1
const removeRepeated = (string, limit) => {
    string = 'xXxyzZaaaYy' // definiçao do parametro string
    limit = 2 // parametro que definr o limite de repetiçoes possiveis
    //transforma todos os elementos da string em caixa baixa 
    const strings = string.toLocaleLowerCase();
    //remove de acordo com a definiçao do limit
    const defLimit= s=> s.split("").reduce((a,b)=>(a[a.length-limit]!=b)?(a+b):a,"")
    return (defLimit(strings));
}
console.log(removeRepeated())
export default removeRepeated;
