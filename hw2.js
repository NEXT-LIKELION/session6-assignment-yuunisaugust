const person = {
    name: "David",
    city: "London",
    age: 30,
};
for (const key in person) {
    person[key]=typeof person[key] === "string" ? person[key] + "(확인)" : person[key];
    console.log(person)
};


const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

const newword = [];
for (let word of words){
    if (word.length>=5) {
        newword.push(word);
    }
    console.log(newword);
};