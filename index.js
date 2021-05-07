console.log("Hola mundo");

x = 4; //operaciones de asignación
z = '6'
y = 1;
// y += x;
// y += z;
y -= z;
console.log(y);

if(x != y){
    console.log("Los valores son distintos");
}

console.log(x && y);
console.log(x || y);

if(x = true){
    console.log(!x);
}

x = 8 ? 'sí' : 'no';
console.log(x);

// ------------------------------------------------------------------------------

imcMario = 0;
imcLuigi = 0;

function calcularIMCMario(){

    pesoMario = document.getElementById('pesoMario').value;
    estaturaMario = document.getElementById('estaturaMario').value;

    if(pesoMario != '' && estaturaMario != ''){
        imcMario += (pesoMario / (estaturaMario*estaturaMario));
        console.log("El IMC de Mario es: " + imcMario);
    }else{
        alert('Tienes que llenar todos lo datos'); 
    }

}

function calcularIMCLuigi(){

    pesoLuigi = document.getElementById('pesoLuigi').value;
    estaturaLuigi = document.getElementById('estaturaLuigi').value;

    if(pesoLuigi != '' && estaturaLuigi != ''){
        imcLuigi += (pesoLuigi / (estaturaLuigi*estaturaLuigi));
        console.log("El IMC de Luigi es: " + imcLuigi);
    }else{
        alert('Tienes que llenar todos lo datos'); 
    }
    
}

// ---------------------------------------------------------

nombre = 'Rodrigo';
edad = 19;

console.log(`Hola, soy ${nombre} y tengo ${edad} años`);


// for(let i = 0; i < 15; i++){
    
//     if (i == 3)
//       continue;
//     console.log(i);

// }

const numeros = [
    1,
    2,
    3,
    4,
    5
]
// numeros.push(6);
// console.log(numeros);

variableNum = [
    1,
    2,
    3,
    4,
    5
];
variableNum.push(7);
console.log(variableNum);

console.log(numeros == variableNum);
console.log(numeros === variableNum);

// for(let i = 0; i < numeros.length; i++){

// }

for(i in numeros){
    console.log(numeros);
}

numeros.forEach( function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});

const reversed = numeros.reverse();
console.log('reversed:', reversed);

matriz = [[1,2],[3,4]];
// matriz[0].push(5);
// matriz[1].push(6);

for(let i = 0; i < matriz.length; i++){
    
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
    
}

// -------------------------------------------------------------------

var array = [9, 7, 3, 9];
console.log(array);
matriz = [];
var raiz = Math.sqrt(array.length);
const seccion = 2;
var resultado = Number.isInteger(raiz);
diagonal1 = 0;
diagonal2 = 0;

for (let i = 0; i < array.length; i += raiz) {
	let pedazo = array.slice(i, i + raiz);
	matriz.push(pedazo);
}

if(Number.isInteger(raiz)){
for( let i=0; i<raiz; i++ ){
    for( let j=0; j<raiz; j++ ){
       if( i==j )
       diagonal1 += matriz[i][j];
   }
}
for( let i=0; i<raiz; i++ ){
    for( let j=0; j<raiz; j++ ){
       if( i+j == raiz-1)
       diagonal2 += matriz[i][j];
   }
}
}else{
    console.log("La matriz no tiene raiz");
}

var res = diagonal1 - diagonal2;

console.log(matriz);
console.log(res < 0 ? res * -1: res);

