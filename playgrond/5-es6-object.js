const name = 'Andrew'
const userAge = 27

const user = {
    name, //es6 short hand syntax for name:name
    age:userAge, // the shorthand is only applicable if we have a variable with the exact name of the property in the object
    location:"Philadelphia"
}

console.log(user)

//es6 object destructuring

const product ={
    label: "red Notebook",
    price: 3,
    stock :200,
    salePrice: undefined
}

const {label, price, stock} = product
console.log(label, stock, price)

// destructuring with custom name for the variable/object pulled off
const {label:productLabel} = product
console.log(productLabel)

//adding default values if destructuring and value doesn't exist
const {label:newLabel, rating = 5} = product
console.log(newLabel, rating)


//destructuring inline of a function
const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}

transaction('order', product)
