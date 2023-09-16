function maior_r(a: number[]): number{
    if (a.length == 1){
        console.log("Caso base atingido!")
        return a[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando maior_r( ", a.slice(1, a.length), ");");      
        let maior_restante = maior_r(a.slice(1, a.length))
        if (Math.abs >= Math.abs){
            return a[0];
        }
        else{ 
            return maior_restante;
        }
    }
}

export{
    maior_r
}
  
 
  const array = [-15,9,6,4];
  const maiorValor = maior_r(array);
  console.log(`O elemento com o maior valor absoluto é: ${maiorValor}`);
  