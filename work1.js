d = [
    { name: "anu", age: 20, place:'ekm'},
    { name: "ansu", age: 30, place: "tdpa" },
    { name: "alan", age: 30, place: "vkm" },
    { name: "abhi", age: 20, place: "ekm" },
    { name: "aswin", age: 40, place: "tvm" },
    { name: "arjun", age: 35, place: "palluruthy" },
  ];

function display(){
  const t_var=document.querySelector('.tbl tbody')
  t_var.innerHTML=""
  d.forEach(element => {
    const t_row=document.createElement('tr')
    
    
    const t_name=document.createElement('td')
    t_name.textContent=element.name
    t_row.appendChild(t_name)
    
    const t_age=document.createElement('td')
    t_age.textContent=element.age
    t_row.appendChild(t_age)
    
    const t_plc=document.createElement('td')
    t_plc.textContent=element.place
    t_row.appendChild(t_plc)

    t_var.appendChild(t_row)
  });
}

document.getElementById("form 1").addEventListener('submit',function(event){
  event.preventDefault()  //remove refresh
  const name=document.getElementById('name').value
  const age=parseInt(document.getElementById('age').value)
  const place=document.getElementById('plc').value

  d.push({name:name,age:age,place:place})

  document.getElementById('name').value=''
  document.getElementById('age').value=''
  document.getElementById('plc').value=''

  display()
})



display()