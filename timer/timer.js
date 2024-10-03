function demo(){
    const main = document.querySelector('.main');
    const div = document.createElement('div'); 
    let count1 = 2; 
    let count = 59; 
    let c = setInterval(function(){
        div.innerHTML = `<h1 style="text-align:center; color:red">0${count1}:${count < 10 ? '0' + count : count}</h1>`;   
        count--;
        
        if (count == 0) {
            count1--;  
            count = 59;  
        }
        
        if (count1 == 0) {
            clearInterval(c);
            alert("Completed");
            div.innerHTML = `<h1 style="text-align:center; color:red">Completed</h1>`;
        }
    }, 1000);
    
    main.appendChild(div);
}
demo();
