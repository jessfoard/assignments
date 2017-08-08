var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  
console.log("fruit", fruit);
console.log("vegatables", vegatables),
    
vegatables.pop();
console.log("vegatables", vegatables);

fruit.shift();
console.log("fruit", fruit);

var index = fruit.inexOf("orange");
console.log(index);

fruit.push(index);
console.log("fruit", fruit);

vegatables.length;
console.log(vegatables.length);

vegatables.push(vegatables.length);
console.log("vegatables", vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

var foodString = food.toString();
console.log("food", foodString);