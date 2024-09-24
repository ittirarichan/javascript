d = [
  { name: "anu", age: 20, place:'ekm'},
  { name: "ansu", age: 30, place: "tdpa" },
  { name: "alan", age: 30, place: "vkm" },
  { name: "abhi", age: 20, place: "ekm" },
  { name: "aswin", age: 40, place: "tvm" },
  { name: "arjun", age: 35, place: "palluruthy" },
];

lsr=[]
gtr=[]


for(let i of d){
    if(i.age >= 30){
        gtr.push(i)
    }
    else{
        
        lsr.push(i)
    }
}
console.log(lsr);
console.log(gtr);