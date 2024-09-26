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

const edit_td=document.createElement('td')
const edit_btn=document.createElement('button')
edit_btn.textContent="edit"
edit_btn.onclick=function(){
  edit_frm(element.name)
}

    edit_td.appendChild(edit_btn)
    t_row.appendChild(edit_td)

    t_var.appendChild(t_row)
  });
}

document.getElementById("submit_form").addEventListener('submit',function(event){
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

let edit_name=''
function edit_frm(name) {
  console.log('editing',name);
  document.getElementById('edit_form').style.display='block'
  document.getElementById('submit_form').style.display='none'
  const edit_data=d.find(user=>user.name==name)
  document.getElementById('e_name').value=edit_data.name
  document.getElementById('e_age').value=edit_data.age
  document.getElementById('e_plc').value=edit_data.place
  edit_name=name
}

document.getElementById('edit_form').addEventListener('submit',function(event){
  event.preventDefault()
  const e_name=document.getElementById('e_name').value
  const e_age=document.getElementById('e_age').value
  const e_plc=document.getElementById('e_plc').value
  // console.log(e_name,e_age,e_plc);
  d=d.map(user=>{
   if(user.name==edit_name){
      return{...user,name:e_name,age:e_age,place:e_plc}
    }
  return user 
  })

document.getElementById('edit_form').style.display='none'
document.getElementById('submit_form').style.display='block'
display()
})

display()