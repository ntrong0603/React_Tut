var array = ['Java Script', "PHP", "Ruby"];
// Destructuring: Lấy ra phần tử xác định
var [a, b, c] = array;

console.log(a, b, c);

//Rest: lấy ra những phần còn lại

var [a, ...rest] = array;

console.log(a, rest);

var course = {
    name: "Javascript",
    price: "1000",
    image: "image javascript",
    children: {
        name: "java",
    }
}
// Với obj phải gọi đúng tên
// Có thể đổi tên biến bằng cách thêm : tên mới. Ví dụ name: parentName
var { name: parentName, price, children: { name: childrenName }, decription = "Default Value" } = course;

console.log(parentName, price, childrenName, decription);

function logger(...params)
{
    console.log(params);
}

logger(1, 2, 4, 5, 6, 7, 8);

function loggerArr([a, b, ...rest])
{
    console.log(a, b);
}

loggerArr(array);

function loggerObj({ name, price, ...rest })
{
    console.log(name);
    console.log(price);
}

loggerObj(course);