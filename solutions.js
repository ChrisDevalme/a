/* 
1) What is the difference between a parameter and an argument?
    - The values that are declared within a function when the function is called are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.

 2) Within a function, what is the difference between return and console.log?
    - console.log() is a function used to print information to the console. Return on the other hand is a call to pass some value back up to where the call was made.
 */

    function palindrome(str) {
        let lowStr = str.toLowerCase()
        let reverseStr = lowStr.split('').reverse().join('')
        if (lowStr === reverseStr) {
            return true
        } else {
            return false 
        }
    }
    palindrome('racecar')

    function sumArray(nums) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
        }
    }
    
    function checkPrime(num) {
        let isPrime = true;
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          } else {
            isPrime = true;
          }
        }
        if (isPrime) {
            return true
        } else {
            return false
        }
      }

    function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            console.log(i);
            }
        }
    }

    function calculateCube(num) {
        return num * num * num;
    }

    function isAVowel(char) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return vowels.includes(char);
    }

    function getTwoLengths(str1, str2) {
        return [str1.length, str2.length];
    }

    function getMultipleLengths(arr) {
        return arr.map(str => str.length);
    }

    function maximumOfThreeNumbers(num1, num2, num3) {
        return Math.max(num1, num2, num3);
    }

    function printLongestWord(arr) {
        return arr.reduce((longest, current) => 
            current.length >= longest.length ? current : longest
        );
    }

    function transmogrify(num1, num2, num3) {
        const product = num1 * num2;
        const result = Math.pow(product, num3);

        return result;
    }

    function sumEvenFibonacci(limit) {
        let num1 = 1;
        let num2 = 2;
        let sum = 0;
    
        while (num2 <= limit) {
            if (num2 % 2 === 0) {
                sum += num2;
            }
            const nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
        }
    
        return sum;
    }

    function findNeedle(haystack) {
        const index = haystack.indexOf("needle");
        if (index !== -1) {
            return `Found the needle at index ${index}.`;
        } else {
            return "Needle not found in the haystack.";
        }
    }

    function sumPositive(arr) {
        const positiveNumbers = arr.filter(num => num > 0);
        const sum = positiveNumbers.reduce((total, num) => total + num, 0);
        
        return sum;
    }



