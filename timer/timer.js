function demo(){
            const main=document.querySelector('.main')
            const div=document.createElement('div') 
            let count1=3
            let count=60
            let c=setInterval(function(){

                div.innerHTML=`<h1 style="text-align:center; color:red">00: ${count}</h1>`   
                count--
                if(count==0){
                    clearInterval(c)
                    alert("Completed")
                    div.innerHTML=`<h1 style="text-align:center; color:red">Completed</h1>`   

                }
            },1000)
            main.appendChild(div)
        }
        demo()
