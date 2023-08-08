/*
'''
❓ PROMPT
The [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is an ancient algorithm for finding all of the prime numbers between up to a given upper bound. It's much more efficient than a function to check whether or not a given single number is prime, if that function is going to be called many times.

The way it works is quite straight foward: We start by assuming all of the numbers between two and the upper bound are prime. Then starting from two, if that number is still marked as prime, we then start counting by twos and remove all of it's multiples. Then move on to three. When we get to four, we've already removed it from our set of candidates, so we continue to five. Five has not been removed so is prime, now count by fives and remove all of those numbers.

This is often implemented with an array of booleans and they all start out as true, then we mark the composites as false, but it makes a lot of sense to do this with a set, first filling it with all of the candidates and then removing the composites.

Example(s)
sieveOfEratosthenes(5) => 2, 3, 5
sieveOfEratosthenes(10) => 2, 3, 5, 7
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
use a datastruc to store the prime and its multiples
 prime number and upperbound should be prime or equal
 iterate from 2 
 if prime found, then store it in the set and delete the multiples of the primes
 return the prime


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n ^1.5) because outer loop of the square root and inner loop is  n 1.5 ,
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sieveOfEratosthenes(upperBound) {
def sieveOfEratosthenes(upperBound: int) -> set[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function sieveOfEratosthenes(upperBound) {
    let prime = new Set();
    for(let i = 2; i <= upperBound;i++){
        prime.add(i)
    }

    for(let i = 2; i < Math.sqrt(upperBound);i++){
        if(prime.has(i)){
            for(let j = i + i ; j <= upperBound;j += i){
                prime.delete(j)
            }
        }
    }
    return prime
} 

console.log(sieveOfEratosthenes(2));
console.log(sieveOfEratosthenes(3));
console.log(sieveOfEratosthenes(4));
console.log(sieveOfEratosthenes(5));
console.log(sieveOfEratosthenes(6));
console.log(sieveOfEratosthenes(10));
console.log(sieveOfEratosthenes(99));
console.log(sieveOfEratosthenes(1000));