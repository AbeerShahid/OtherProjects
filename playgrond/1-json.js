
const fs = require('fs');
const book = {
    title:'Alchemist',
    author:'Paulo Coleho'
}
//convert object to json string
const bookJson = JSON.stringify(book)
console.log(bookJson)

//convert json string back to object
const parsedData = JSON.parse(bookJson)
console.log(parsedData.title)

//create a json file
//fs.writeFileSync("1-json.json", bookJson)

//read a json file and create object 
const dataBuffer = fs.readFileSync("1-json.json")
const data = JSON.parse(dataBuffer.toString())
console.log(data.author)


const sampleBuffer = fs.readFileSync("sample.json")
const sample = JSON.parse(sampleBuffer.toString())

sample.name = "Abeer"
sample.age = 28

const sampleString = JSON.stringify(sample)
fs.writeFileSync("sample.json", sampleString)

