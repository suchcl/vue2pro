let ming = {
    name: "小明",
    age: 42,
    gender: "Male"
};

for (let key in ming) {
    console.log(`${key}:${ming[key]}`);
}

console.log(Object.keys(ming));