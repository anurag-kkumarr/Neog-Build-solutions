//Q1 Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const powerFunc = (a, b) => Math.pow(a, b);
console.log(powerFunc(2, 3));

//Q2 Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
const areaOfHexagon = length => 3*Math.sqrt(3)/2*length*length;
console.log(areaOfHexagon(10));

//Q3 Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

// M-1
const noOfWords = str => {
   // str = "We are neoGrammers";
    const arr = str.split(' ');
    console.log(arr.length); 
}
noOfWords("We are neoGrammers");

// M-2
const noOfWords = str => console.log(str.split(' ').length);
noOfWords("We are neoGrammers");

//Q4 Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMin = (...arr) => console.log(Math.min(...arr));
findMin(3,5);
findMin(3, 5, 9, 1);

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...rest) => console.log(Math.max(...rest));
findMax(3,5);
findMax(3,5,9,1);

// Q6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (...angles)  => {
    if(Math.max(...angles)>90){
        console.log("Obtuse");
    }
    else if(Math.max(...angles)===90)
        console.log("Right");
    else
        console.log("Acute");
}
typeOfTriangle(30,60,90);

// correct
const typeOfTriangle = (a, b,c) => {
    if(a=== b && b===c)
        console.log("Equilateral");
    else if(a!==b && b!==c && c!==a)
        console.log("Scalene");
    else
        console.log("Isosceles");
}
typeOfTriangle(30, 60, 90);

// Medium
// Q1 Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = (arr) => console.log(arr.length);
arrayLength([1,5,3,7,8]);

// Q2 Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf = (arr, num) => console.log(arr.indexOf(num)); 
indexOf([1, 6, 3, 5, 8, 9], 3);

// Q3 Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replaceItem = (arr, a, b) => console.log(arr.map(value => value === a? b : value));
replaceItem([1,5,3,5,6,8],5,10);

// Q6. Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArray([1,3,5], [2,4,6]));

// Q5 Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

const charAt = (str, index) => str[index];
console.log(charAt("neoGcamp", 4));

// Q6 Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate = (str1, str2) => {
    const date1 = Number(str1.split('/').reverse().join(''));
    const date2 = Number(str2.split('/').reverse().join(''));
    // console.log("date1",date1);
    // console.log("date2",date2);
    return date1> date2? str2 : str1;
    
}
console.log(minDate('02/05/2021', '24/01/2021'));

const minDate = (str1, str2) => Number(str1.split('/').reverse().join('')) < Number(str2.split('/').reverse().join('')) ? str1 : str2;
console.log(minDate('02/05/2021', '24/01/2021'));

// Advance

// Q1 Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const encodeString = (str, num) => 
{
    let encodedStr = "";
    for(value of str) {
        let addNum = value.charCodeAt() + num % 26;
        if(addNum > 122)
            addNum -= 26;
        encodedStr += String.fromCharCode(addNum);
    }
    return encodedStr;
}
console.log(encodeString('neogcamp', 2));

// Q2 Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = (str) => {
    let arr = str.split(' ');
   let finalArr= arr.map(value => value[0].toUpperCase()
    + value.substring(1) );
    const finalSentence = finalArr.join(' ');
    return finalSentence;
}
console.log(toSentenceCase('we are NeoGrammers'));

// Q3 Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = arr => arr.sort((a, b) => a-b);
console.log(sortArray([100, 83, 32, 9, 45, 61]));

// Q4 Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = str =>  {
        let wordArr = str.split(' ');
        let array = wordArr.map(value => value.split('').reverse().join(''));
        return array.join(' ');
    }
console.log(reverseCharactersOfWord('we are neoGrammers'));