
//PROBLEM 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
/* this should console log the 
string in index 0 and then in index 1
as such:
Tesla
Mercedes
*/


//PROBLEM 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
/* this should not allow to console log name because it is
it is not available outside the object.
second log should print 'Elon' */
// correction: second log only prints if the first is commented out.

//PROBLEM 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
/* this should first console '12345'
the second consol.log will pring undefined because 
there is no 'password' in the person object
*/


//PROBLEM 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
/* this should first log 'false'
then 'true' */
/* correct becasue the 'first' does not match 'second'
but it does match 'third' */

//PROBLEM 5

const lastTest = {
    key: 'value', // sets'value' to key
    secondKey: [1, 5, 1, 8, 3, 3]   //sets [] to secondkey
}
const { key } = lastTest;  //pulls 'value'
const { secondKey } = lastTest; //pulls '[]'
const [ ,willThisWork] = secondKey;  /* this will pull the '1' index of secondkey 
becasue it was already set as a variable outside of the obbject. */
//Predict the output
console.log(key);  // this will print 'value'
console.log(secondKey); // this will print 1,5,1,8,3,3
console.log(secondKey[0]);  // this will print 1
console.log(willThisWork);  // this will print 5

