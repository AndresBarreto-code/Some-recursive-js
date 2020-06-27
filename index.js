
function factorial(x){
    return x==0 ? 1 : x*factorial(x-1);
}
function factorialDivFactorial(x,y){
    if(x>y){
        return x==y ? 1 : x*factorialDivFactorial(x-1,y);
    }else{
        console.log(x,y)
        return r = x==y ? 1 : ((1/y)*factorialDivFactorial(x,y-1));
    }
}
function permutacion(n,r){
    //Dado un conjunto de n elementos, donde n es la cantidad de elementos
    //calcula cuantos distintos conjuntos de r elementos se pueden formar en diferente orden
    //importa el orden (es decir ab!=ba)
    //donde no se repiten los valores en n
    //ejemplo: {123}{132}{213}{231}{312}{321} 
    return factorialDivFactorial(n,n-r);
}
function variacionSinRep(n,r){
    //Dado un conjunto de n elementos, donde n es la cantidad de elementos
    //calcula cuantos distintos conjuntos de r elementos se pueden formar en diferente orden
    //importa el orden (es decir ab!=ba)
    //donde no se repiten los valores en n
    //ejemplo: {123}{132}{213}{231}{312}{321} 
    return factorialDivFactorial(n,n-r);
}
function variacionConRep(n,r){
    //Dado un conjunto de n elementos, donde n es la cantidad de elementos
    //calcula cuantos distintos conjuntos de r elementos se pueden formar en diferente orden
    //importa el orden (es decir ab!=ba)
    //donde no se repiten los valores en n
    //ejemplo: {123}{132}{213}{231}{312}{321} 
    return n**r;
}
function combinacionSinRep(n,r){
    //Dado un conjunto de n elementos
    //calcula cuantos distintos subconjuntos p elementos
    //no importa el orden (es decir ab==ba)
    //donde no se repiten los valores en n
    //ejemplo: para {abcd} en subconjuntos de 2, n=4, r=2
    //{ab}{ac}{ad}{bd}{bc}{cd}
    return factorialDivFactorial(n,n-r)/factorial(r);
}
function combinacionConRep(n,r){
    //Dado un conjunto de n elementos
    //calcula cuantos distintos subconjuntos p elementos
    //no importa el orden (es decir ab==ba)
    //donde se pueden repetir los valores en n
    //ejemplo: para {abcd} en subconjuntos de 2, n=4, r=2
    //{ab}{ac}{ad}{bd}{bc}{cd}{aa}{bb}{cc}{dd}
    return factorialDivFactorial(n+r-1,n-1)/factorial(r);
}
function numerosMayores(n,r,x){
    //donde n son las cifras dadas, r son los digitos a agrupar, y x es la condicion numeros mayores a x
    let res=1;
    number=Array.from(String(x), Number);
    for(let i=1;i<=r;i++){
        if(i==number.length){
            res*=n-number[0];
        }else{
            res*=n;
        }
    }
    number.shift();
    return res-number.join('')-1;  
}
function divisores(x,y){
    let count=0;
    for(let i=1;i<=x;i++){
        if(i%y==0){
            count+=1;
        }
    }
    return count;
}
$(document).ready(
    ()=>{
        resultado=document.getElementById('resultado');
        resultado.innerHTML=combinacionSinRep(4,2);
    }
);