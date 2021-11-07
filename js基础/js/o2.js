// var tt = "LiSongfeng";

function add(a,b){
    return a+b;
}

console.log(typeof add); // function

const obj = {};

Object.defineProperty(obj,"info",{
    name:"Nicholas Zakas",
    age: 18,
    height: 1.98
});

console.log(obj);