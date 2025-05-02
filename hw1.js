const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17},
    { name: "Charlie", age: 19},
];

[name, age] = users;

function statuss(age){
    return age >= 18 ? "성인" : "미성년자";
};


let users2 = [...users, statuss(age)];

console.log(users2);
