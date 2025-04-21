// https://www.youtube.com/watch?v=h33Srr5J9nY
// JavaScript ES6 Arrow Functions Tutorial 
// Web Dev Simplified
// 9:03/ 9:31
// 

// create a class
// example =>
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

class Person {
    constructor(name) {
        this.name = name
    }
}

const person = new Person("Bob")
console.log(person.name)

// learn fetch
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log('sprites::::')
        console.log(data.sprites)
    })
    .catch(error => console.log('ERROR'))
