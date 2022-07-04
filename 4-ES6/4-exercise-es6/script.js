// let n1 = 40;

// n1 = 50;


// const v1 = 60;
// v1 = 70;


// for(let i = 0; i < 10; i++) {
//     console.log(i , "some string")
// }

// const newValue = sum();

// const sum = (...args) => {

//     return args.reduce((a, b) => a + b, 0);
//   }

//   console.log(sum(1,2,3,4,5))

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Only change code below this line
  
// //   const today = HIGH_TEMPERATURES.today;
// //   const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
//   const {today, tomorrow } = HIGH_TEMPERATURES;

//   console.log(today)
//   console.log(tomorrow)

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Only change code below this line
    
//   // const highToday = HIGH_TEMPERATURES.today;
//   // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
//   const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;

//   console.log(highToday, highTomorrow)

// function Person(name, age) {

//     this.name = name;
//     this.age = age;
//     this.fullName = function(){
//         console.log(this.name + " " + this.age)
//     }
// }

// const person1 = new Person("john", 40);
// console.log(person1.fullName())

// const p2 = new Person("dev", 35);
// console.log(p2.fullName())

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data").then((result) => {
        console.log(result)
      })
    } else {  
      reject("Data not received");
    }
  });

console.log(makeServerRequest)