const square = function(x) {
    return x*x
}

console.log(square(3))

const squarStyle2 = (x) => {
    return x*x
}
console.log(squarStyle2(3))

const squarStyle3 = x => x*x
console.log(squarStyle3(3))


const event = {
    name: "birthday",
    guestlist:["Me", "you"],
    printGuests() {
        console.log("printing guestlist for ", this.name)
        this.guestlist.forEach((guest)=>{
            console.log(guest, " is attending ", this.name)
        })
    }
}

event.printGuests()