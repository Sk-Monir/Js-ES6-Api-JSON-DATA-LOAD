// 1.Write and arrow function that will take 3 parameters, Will multiply the parameters and will return the result 

const multiplyNum = (a, b, c) => a * b * c;
console.log(multiplyNum(3, 5, 7));

//2.Write the following sentence in three line and print the result  :
// i am a web developer.i am a web developer.i am a web developer.

const line = `i am a web developer.
i am a web developer.
i am a web developer.`;
console.log(line);

//3.Write an arrow function that will take 2 parameters : One parameters  will come from you and the other parameters Will be default parameter. Add these  two parameter and return the result 

const deflt = (a, b = 0) => a + b;
console.log(deflt(5));