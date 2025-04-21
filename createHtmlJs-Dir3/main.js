let app = document.getElementById("app")
let div = document.createElement("div")
// console.dir(div)
div.id = "divID"
div.innerText = "Hello World"
div.classList.value = "my-container"
app.append(div)
// div = document.getElementById("divID")
// div.classList.add = "second"

console.dir(div.classList)

object = {name: 'User 1'}
console.log(object)

object1 = JSON.stringify({name : 'User 1'})
console.log(typeof(object1))