const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("note added"))
    }
    else {
        console.log(chalk.red.inverse("note was a duplcate"))
    }
}

const removeNote =  (title) =>{
    const notes = loadNotes()
    const removedTitleList = notes.filter((note)=>note.title != title)
    saveNotes(removedTitleList)
    if(notes.length===removedTitleList.length){
        console.log(chalk.bgRed("no note found"))
    }else{
        console.log(chalk.bgGreen("note removed"))

    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.yellow.inverse("your notes: . . ."))

    notes.forEach(note => {
        console.log(chalk.magenta(note.title))
    }); 
}
   

const readNote = (title) => {
    const notes =loadNotes()
    const noteToRead = notes.find((note)=>note.title===title)
    if(!noteToRead){
        console.log(chalk.red.inverse("note not found"))
    }
    else{
        console.log(chalk.magenta.bold.underline(noteToRead.title))
        console.log(noteToRead.body)
    }
    
}

const saveNotes =  (notes) => {
    const jsonWriteNote = JSON.stringify(notes)
    fs.writeFileSync("notes.json", jsonWriteNote)
    
}
const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)

    }catch(e){
        console.log("got error")
        return []
    }
}

module.exports = {
    addNotes:addNotes,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}