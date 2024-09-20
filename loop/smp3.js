function smp3(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    for(i=a;i<=b;i++){
        if(i%2!=0){
            console.log(i);
            
        }
    }
}