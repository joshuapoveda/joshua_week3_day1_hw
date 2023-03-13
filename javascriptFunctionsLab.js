//2

const maxOfThree = function (firstAmt, secondAmt, thirdAmt) {
    //Add first two and last two values to see which sum
    //is greatest. Then compare those two values to get the
    //greatest number.
    if ((firstAmt + secondAmt) > (secondAmt + thirdAmt)) {
        if (firstAmt > secondAmt) {
            return firstAmt
        } else {
            return secondAmt
        }
    } else {
        if (secondAmt > thirdAmt) {
          return secondAmt;
        } else {
          return thirdAmt;
        }
    }
}

console.log(maxOfThree(5, 20, 1))

//3

function isCharAVowel(char){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    //use includes method    
    return vowels.includes(char)
}
console.log(isCharAVowel('u'))

//4

const sumArray = function (arrOfNums) {
    //initialize a variable at 0
    //iterate through each array item, adding
    //each item to the sum variable
    sum = 0
    for (i = 0; i < arrOfNums.length; ++i){
        sum += arrOfNums[i]
    }
    return sum
}
console.log(sumArray([2,4,5]))

//5
    //repeat process of number //4 except change
    //initiale variable to 1 to avoid multiplication by
    //0 and += to *= to instruct function to multiply
function multiplyArray (arrOfNums2) {
  product = 1
  for (i = 0; i < arrOfNums2.length; ++i) {
    product *= arrOfNums2[i]
  }
  return product
};

console.log(multiplyArray([2, 4, 5]));


//6
    //rest parameter intakes an indefinite number of
    //arguments. Return length of the array of arguments
    //as a representation of the number of items
const numArgs = function (...args) {
    return [...args].length
}

console.log(numArgs(2, 3, 1, 'about', true, [1,2,3],{name:'JP'}))

//7
    //create an array out of the string argument
    //return new array as reversed array, then as string
function reverseString(string) {
    let stringArray = string.split('')
    return stringArray.reverse().join('')
}

console.log(reverseString('rockstar'))

//8
    //iterate through the array and push each string's length to a new array
    //sort the array by length and return the largest number amount

const longestArray = function (arr) {
    let arrLengths = []
    for (i = 0; i < arr.length; i++){
        arrLengths.push(arr[i].length)
    }
    return arrLengths.sort((a,b)=>a-b).pop()
}

console.log(longestArray(['hello','sesquipedalian','hi','greetings','Astronomical']))

//9
 //iterate through array
 //if string length is greater than num
 //push to array
 ///return array

function stringsLongerThanThat(arrayOfStrings, num) {
    stringsForReturn = []
    for (i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > num) {
            stringsForReturn.push(arrayOfStrings[i])
        }
    }
    return stringsForReturn
}

console.log(stringsLongerThanThat(['say', 'hello', 'in', 'the', 'morning'], 3))
