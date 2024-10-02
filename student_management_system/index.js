d = [
  {
    id: "1",
    name: "Sreeraj",
    age: 21,
    email: "sreerajvava@gmail.com",
    course: "Python",
    date: "30 - 9 - 2024",
  },
  {
    id: "2",
    name: "Arjun",
    age: 22,
    email: "arjunvava@gmail.com",
    course: "Devops",
    date: "30 - 10 - 2024",
  },
  {
    id: "3",
    name: "Amal",
    age: 20,
    email: "amal@gmail.com",
    course: "MEARN",
    date: "30 - 11 - 2024",
  },
  {
    id: "4",
    name: "Aswin",
    age: 21,
    email: "aswin@gmail.com",
    course: "Digital Marketing",
    date: "30 - 12 - 2024",
  },
];


function display(){
    const t_var=document.querySelector('.tbl1 tbody')
    t_var.innerHTML=""
    d.forEach(element => {
      const t_row=document.createElement('tr')
      
      
      const t_id=document.createElement('td')
      t_id.textContent=element.id
      t_row.appendChild(t_id)

      const t_name=document.createElement('td')
      t_name.textContent=element.name
      t_row.appendChild(t_name)
      
      const t_age=document.createElement('td')
      t_age.textContent=element.age
      t_row.appendChild(t_age)
      
      const t_email=document.createElement('td')
      t_email.textContent=element.email
      t_row.appendChild(t_email)

      const t_course=document.createElement('td')
      t_course.textContent=element.course
      t_row.appendChild(t_course)

      const t_date=document.createElement('td')
      t_date.textContent=element.date
      t_row.appendChild(t_date)
  
  const edit_td=document.createElement('td')
  const edit_btn=document.createElement('button')
  edit_btn.textContent="edit"
  edit_btn.onclick=function(){
    edit_form(element.name)
  }
  edit_td.appendChild(edit_btn)
  t_row.appendChild(edit_td)

  const del_td=document.createElement('td')
  const del_btn=document.createElement('button')
  del_btn.textContent='delete'
  del_btn.onclick=function(){
    delete_data(element.name)
  }
  del_td.appendChild(del_btn)
  t_row.appendChild(del_td)
  t_var.appendChild(t_row)
});
}

display()

document.getElementById("submit_form").addEventListener('submit',function(event){
    event.preventDefault()  //remove refresh
    const id=document.getElementById('id').value
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const email=document.getElementById('email').value
    const course=document.getElementById('course').value
    const date=document.getElementById('date').value
  
    d.push({id:id,name:name,age:age,email:email,course:course,date:date})
  
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('email').value=''
    document.getElementById('course').value=''
    document.getElementById('date').value=''
  
    display()
  })


  let edit_name=''
  function edit_form(name) {
    console.log('editing',name);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit_form').style.display='none'
    const edit_data=d.find(user=>user.name==name)
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_email').value=edit_data.email
    document.getElementById('e_course').value=edit_data.course
    document.getElementById('e_date').value=edit_data.date
    edit_name=name
  }
  

  document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_email=document.getElementById('e_email').value
    const e_course=document.getElementById('e_course').value
    const e_date=document.getElementById('e_date').value
    // console.log(e_name,e_age,e_plc);
    d=d.map(user=>{
     if(user.name==edit_name){
        return{...user,id:id,name:name,age:age,email:email,course:course,date:date}
      }
    return user 
    })
    document.getElementById('edit_form').style.display='none'
    document.getElementById('submit_form').style.display='block'
    display()
    })

function delete_data(name){
  d=d.filter(user=>{
    if(user.name!=name){
      return user
    }
  })  
  display()
}

display()