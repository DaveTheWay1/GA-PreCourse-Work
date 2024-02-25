const favoriteFoods = ["mango", "peach", "lengua", "strawberries"];
console.log(favoriteFoods);
favoriteFoods.push("banana");
console.log(favoriteFoods);
favoriteFoods.push("hot dogs");
console.log(favoriteFoods);
favoriteFoods.pop();
console.log(favoriteFoods);
// * POP() does not take any args. REMEMEBER THOUGH js has slice and etc
// output:
// [ 'mango', 'peach', 'lengua', 'strawberries' ]
// [ 'mango', 'peach', 'lengua', 'strawberries', 'banana' ]
// [ 'mango', 'peach', 'lengua', 'strawberries', 'banana', 'hot dogs' ]
// [ 'mango', 'peach', 'lengua', 'strawberries', 'banana' ]