function factorial() {
    i = parseInt(document.getElementById("fno").value)
    fact=1
    a=1
    do{
        fact*=a
        a++
    }
  
    while (a<=i)
        console.log(fact);
        
  }
  