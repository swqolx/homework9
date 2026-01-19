//exercise 1
// const arr = ['Mango', 'Poly', 'Ajax']
// function logItems(array){
//   for(let i = 0;i < array.length;i++){
//    console.log(`${i + 1} - ${array[i]}`);
   
    
//   }
// }
// logItems(arr)

//exercise 2
// function calculateEngravingPrice(message, pricePerWord) {
//   const word = message.split(" ")
//   return word.length * pricePerWord

// }
// console.log(calculateEngravingPrice("My name is Nastya ", 60));

//exercise 3
// const stringLongest = 'lala sls kk eirif djdjdd rk'

// function findLongestWord(string){
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord(stringLongest));


//exercise 4
// const message = "fffb kmvffv  jkfm  miomri miorn inmoiroie einifn ciog"
// function formatString(string){
//    if (string.length <= 40) {
//     return string;
//   }
//   return string.slice(0, 40) + "...";
// }
// console.log(formatString(message));


//exercise 5

// function checkForSpam(message){
//   const lowerMessage = message.toLowerCase();
//   return lowerMessage.includes("spam") || lowerMessage.includes("sale");
// }
// checkForSpam("Big SALE today"); 
// checkForSpam("Hello friend");   

//exercise 6

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("Введіть число");

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert("Було введено не число, попробуйте ще раз");
//     continue;
//   }

//   numbers.push(input);
// }

// for (let number of numbers) {
//   total += number;
// }

// if (numbers.length > 0) {
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// }