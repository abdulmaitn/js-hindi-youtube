// const marvel_heros = ["thor", "ironman", "spiderman"];
// const dc = ["Superman", "flash", "batman"];

//marvel_heros.push(dc); // Correct variable name is 'dc'

// console.log(marvel_heros);  // [ 'thor', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // not suitable


// marvel_heros.concat(dc)
// console.log(marvel_heros);   // [ 'thor', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]


// let allHeros = marvel_heros.concat(dc)
// console.log(allHeros);  // ['thor','ironman','spiderman', [ 'Superman', 'flash', 'batman' ],'Superman','flash','batman']

// let all_new_heros = [...marvel_heros, ...dc]

// console.log(all_new_heros);





let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let real_another_array = another_array.flat(Infinity);
console.log(real_another_array);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Hitesh"));  // false
console.log(Array.from("Hitesh"));  // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from ({name: "hitesh"}));  // []  // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]




