var array1 = ['Javascript', "Ruby", 'PHP'];
var array2 = ['ReactJS', "Dart"];
var array3 = [...array2, ...array1];

console.log(array3);

var obj1 = {
    name: "Javascript"
}

var obj2 = {
    price: 1000
}

var obj3 = { ...obj1, ...obj2 };
console.log(obj3);