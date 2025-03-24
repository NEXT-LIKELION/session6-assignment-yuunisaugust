const user = {
    id: 101,
    name: "Eve",
    email: "eve.com",
    role: "admin"
};

function getUserData(obj, key) {
    return obj[key] !== undefined ? obj[key] : "키 없음";
};

console.log(getUserData(user, "name"));