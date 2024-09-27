// function display(){
//     console.log('display');
    
// }

// const a=setInterval(display,2000)


let count=10
let c=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(c)
        console.log("completed");
        
    }
})