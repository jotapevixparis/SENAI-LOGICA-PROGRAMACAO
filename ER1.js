
/*
Sistema de Cadastro de Peças
- Permitir o cadastro da peça somente se ela pesar mais de 100g.
- Numero de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuario recebera mensagem: lista de peças esta lotada
- Validar se o nome da peça possui mais de 3 caracteres. 
*/


let peso = 50
if(peso<100) {
console.log ("A peça deve ter no minimo 100g")
}else{
    console.log ("A peça possui o tamanho adequado")
}

let peso2 = 50
if(peso2>=100) {
console.log ("A peça possui o tamanho adequado")
}else{
    console.log ("A peça deve ter no minimo 100g")
}


var listaDePeças = ["Lanterna", "Motor", "Amortecedor", "cambio", "painel", "cabeçote"]
if (listaDePeças.length<10){
    //possivel cadastrar
    console.log ("é possivel cadastrar mais!!")
}else{
    console.log ("Nao vai dar nao.... acabou espaço")
} 

let nomePeça = "ivonette rainha do croquette"
if(nomePeça.length>3){
    console.log("Nome da peça adequado para o cadastro")
}else{
    console.log ("O nome da peça deve ter  mais que 3 caracteres, digite um nome adequado")
}

switch (nomePeça.length){
    case 0:
        console.log ("O nome nao pode ser vazio")
        break;
    case 1: 
    console.log ("o nome tem apenas 1 caracter e precisa ser mais que 3")
    break;
    case 2: 
    console.log ("o nome tem apenas 2 caracteres e precisa ser mais que 3")
    break;
    case 3:
        console.log ("o nome tem apenas 3 caracteres e precisa ser mais que 3")
        break;
        default:
            console.log ("o nome esta adequado")
            break;
}
 
