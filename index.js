
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
function Ackermann(m,n){
    console.log(m,n)
    if(m==0){
        return n+1;
    }else if(n == 0){
        return Ackermann(m-1,1);
    }else{
        return Ackermann(m-1,Ackermann(m,n-1));
    }
}
function quicksort(a){
    let pivote=Math.floor(a.length/2);  
    let leftArray=[];
    let rightArray=[];
    if(a.length>1){
        a.forEach((element,index) =>{
            if(element>a[pivote] && index!=pivote){
                rightArray.push(element);
            }else if(element<=a[pivote] && index!=pivote){
                leftArray.push(element);
            }
        });
        rightArray=quicksort(rightArray);
        leftArray=quicksort(leftArray);
        leftArray.push(a[pivote]);
        if(rightArray.length){
            leftArray.push(rightArray);
        }
        return leftArray;
    }else{
        return a
    }
}

function minimumFountain(locations){
    let n = locations.length;
    let intevalArray = new Array(n).fill(0);
    let count= 1;
    locations.forEach((element,index)=>{
        let left = Math.max((index+1)-element,1);
        let right = Math.min((index+1)+element,n);
        intevalArray[left-1] = Math.max(intevalArray[left-1],right);
    });
    let right = intevalArray[0];
    let currentMax = intevalArray[0];
    locations.forEach((element,index)=>{
        currentMax = Math.max(currentMax,intevalArray[index]);
        if(index == right){
            count++;
            right = currentMax;
        }
    });
    return count;    
}

$(document).ready(
    ()=>{
        resultado=document.getElementById('resultado');
        prueba=document.getElementById('prueba');

        let valorDePrueba1 = [0,0,0,3,0,0,2,0,0];  //2);
        let valorDePrueba2 = [3,0,2,0,1,0];  //2);
        let valorDePrueba3 = [3,0,1,0,1,0];  //2);
        let valorDePrueba4 = [3,0,1,0,0,1];  //2);
        let valorDePrueba5 = [2,0,2,0,1,0];  //2);
        let valorDePrueba6 = [2,0,0,0,0];  //3);
        let valorDePrueba7 = [0,0,0,0,0];  //5);
        let valorDePrueba8 = [1,2,1];  //1);
        let valorDePrueba9 = [0,1,0];  //1);
        let valorDePrueba10 = [1,1,1];  //1);
        let valorDePrueba = valorDePrueba8;

        prueba.innerHTML=valorDePrueba;
        resultado.innerHTML=minimumFountain(valorDePrueba);
    }
);