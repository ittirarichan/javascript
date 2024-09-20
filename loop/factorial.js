function smp5() {
    i = parseInt(document.getElementById("fno").value);
    fact=1
    a=1
    do{
        a*=fact
        fact++
    }
  
    while (fact<=i)
        console.log(a);
        
  }
  