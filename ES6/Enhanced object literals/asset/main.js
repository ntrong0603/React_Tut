/**
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
*/
const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
function arrToObj(arr)
{
    return arr.reduce(
        (obj, item) =>
        {
            obj[item[0]] = item[1];
            return obj;
        }
        , {});
}
console.log(obj1)