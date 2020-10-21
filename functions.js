printName();

function printName() {
    console.log('My name is Richard.');
}

const cars = ['Lambo', 'Ferarri', 'Bugatti'];
const motorcycles = ['Kakasaki']

function returnSecondElement(array) {
    if (array.length < 2) {
        console.log('There is no second element')
    } else {
        return array[1];
    }
}

console.log(returnSecondElement(cars));
console.log(returnSecondElement(motorcycles));