d={name:'anu',age:20,place:'ekm'}

console.log(d);
console.log(d['age']);
console.log(d.age);
console.log(d.place);


d.place="tdpa"
d['mark']=25
d.lang="malayalam"
console.log(d);



for(let i in d){
    if(d['age']==20){
        console.log(i,d[i]);
        
    }
}