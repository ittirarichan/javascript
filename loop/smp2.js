function smp2(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    sum=0
    for(i=a;i<=b;i++){
        sum+=i
    }
    console.log(sum);
    
}