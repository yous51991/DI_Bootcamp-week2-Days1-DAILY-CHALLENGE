// Exercise 1
// ----------------------------
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0, 1); //supprimer Banana
fruits.sort(); // mettre par ordre alphabetique
fruits.push("Kiwi"); // ajouter kiwi a la fin
fruits.shift(); // supprimer Apples
fruits.reverse(); // inverser le tableau
console.log(fruits)

// Exercise 2
// -----------------------------------
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);