console.log('start');
function display(callback) {
    console.log('welcome');
    console.log('welcome1');
    console.log('welcome2');
    setTimeout(function(){
        console.log('inside function');
        callback()
    },3000)
    
}

function display1(){
    console.log('display1');
    console.log('display2');
    console.log('display3');
    
}

console.log('before');
display(display1)
console.log('end');
