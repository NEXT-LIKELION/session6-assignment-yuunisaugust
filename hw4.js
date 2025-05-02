const jsonString =  `
[
    {"id": 1, "name": "Alice", "age": 25, "email": "a.com"},
    {"id": 2, "name": "Bob", "age": 30, "email": "b.com"},
    {"id": 3, "name": "Charlie", "age": 35, "email": "c.com"}
]
`;

const obj = JSON.parse(jsonString);
console.log(obj);
const sol = obj.reduce((acc, { id, name, age }) => {
    acc[id] = { id, name, age };
    return acc;}, {});
console.log(sol);