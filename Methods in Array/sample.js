l=[1,2,3,4,5,6]

console.log(typeof l);
console.log(l[0]);
console.log(l[3]);
console.log(l.length);

a=l.toString()
console.log(typeof a);
l.pop()
console.log(l);
l.push(10)
console.log(l);



s=[1,2,3,4,5,6,7,8]

s[10]=100
console.log(s);
console.log(s.length);
s.shift()
console.log();
s.unshift(101)
console.log(s[0]);
delete s[0]
console.log(s);


for(let i in s){
    console.log(i);
    
}


for(let i of s){
    console.log(i);
    
}


for(let i of s){
    console.log(s);

    if(i==5){
        break
    }
    
}


