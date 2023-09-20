function tmbs(a: number[]): number{
    if (a.length == 1){
        console.log("Caso base atingido!")
        return a[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando tmbs( ", a.slice(1, a.length), ");");      
        let maior_restante = tmbs(a.slice(1, a.length))
        if (Math.abs >= Math.abs){
            return a[0];
        }
        else{ 
            return maior_restante;
        }
    }
}

export{
    tmbs
}
  
 
  const array = [-15,9,6,4];
  const maiorValor = tmbs(array);
  console.log(`O elemento com o maior valor absoluto é: ${maiorValor}`);