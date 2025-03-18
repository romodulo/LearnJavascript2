const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.copyWithin(2, 0)
console.log("fruits:", fruits)

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
fruits2.copyWithin(2,0,2)
console.log("fruits2:", fruits2)

// fruits: [ 'Banana', 'Orange', 'Banana', 'Orange' ]
// fruits2: [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

const fruits3 = ["Banana", "Orange", "Apple", "Mango"]
fruits3.splice(2,0, "Lemon", "Kiwi")
console.log("fruits3:", fruits3)

// fruits3: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

const fruits4 = ["Banana", "Orange", "Apple", "Mango"]
fruits4.splice(2, 2, "Lemon", "Kiwi")
console.log("fruits4:", fruits4)

// fruits4: [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
fruits5.splice(0,1)
console.log("fruits5:", fruits5)

// fruits5: [ 'Orange', 'Apple', 'Mango' ]

// done for now <11:14> of < 3-18>
// next is toSpliced()

const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus = fruits6.slice(1)
console.log("citrus:", citrus)

// citrus: [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus2 = fruits7.slice(1, 3)
console.log("citrus2:", citrus2)

// citrus2: [ 'Orange', 'Lemon' ]