function callConsole(n) {
    console.log(n)
    return "callConsole() complete"
}

callConsole(1)

// try-call-back
// setTimeout(() => console.log(100 + "pre-nested-"), 1333) //is this asynchronous, I guess so. 

//
const callThis = (n) => {console.log(n + " compl")}
callThis(2)

// try nested-
// setTimeout(() => { console.log(100); setTimeout( () => {console.log(200); setTimeout( () => {console.log(300)}, 1333)}, 1333)}, 1333)

// try Math module-
const randInt = Math.floor(Math.random() * 2)
console.log(randInt)
