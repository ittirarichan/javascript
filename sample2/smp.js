function sample(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    document.getElementById('h1').innerHTML=a+b
    console.log(a);
    console.log(b);

}


function sample1(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    document.getElementById('h1').innerHTML=a-b
    console.log(a);
    console.log(b);

}

function sample2(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    document.getElementById('h1').innerHTML=a*b
    console.log(a);
    console.log(b);

}

function sample3(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    document.getElementById('h1').innerHTML=a/b
    console.log(a);
    console.log(b);

}


function sample4(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    document.getElementById('h1').innerHTML=a%b
    console.log(a);
    console.log(b);

}


function sample5(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)

    if(a>b){

        document.getElementById('h1').innerHTML=a
    }
    else{
        document.getElementById('h1').innerHTML=b

    }


}



function sample6(){
    a=parseInt(document.getElementById('fno').value)
    b=parseInt(document.getElementById('sno').value)
    c=parseInt(document.getElementById('tno').value)

    if(a>b && a>c){

        document.getElementById('h1').innerHTML=a
    }
    else if (b>a && b>c){
        document.getElementById('h1').innerHTML=b

    }
    else{
        document.getElementById('h1').innerHTML=c

    }


}


