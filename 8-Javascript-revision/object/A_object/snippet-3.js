// snippet 3
let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favoriteFoods: ["bacon"],
  };
  
  console.log(dog.age);
  console.log(dog.breed);
  console.log(dog.favoriteFoods);
  
  dog.age++; // 6
  dog.breed = dog.breed.toUpperCase(); // PUG
  dog.favoriteFoods.push("sausage"); // ["bacon", "sausage"]
  
  console.log(dog.age); // 6
  console.log(dog.breed); // PUG
  console.log(dog.favoriteFoods);// ["bacon", "sausage"]
  
  for (let property in dog) {
    console.log(property + " is " + dog[property]);
  }