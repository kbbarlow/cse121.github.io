const PI = 3.14;
var radius = 3;
let theArea = compArea(PI, radius)
console.log(theArea)
function compArea(PI, radius) {
area = radius * radius * PI;
return area
}
radius = 4;
let theArea2 = compArea(PI, radius)
console.log(theArea2)