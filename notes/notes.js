import fs from 'fs'
import chalk from "chalk";

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(chalk.red('Note title taken!'))
    } else {
        notes.push({
            id: notes.length + 1,
            title: title,
            body: body
        })
        saveNotes(notes)
    }
}

export const removeNote = (id) => {
    const notes = loadNotes()
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex === -1) {
        console.log(chalk.red('Note not found!'))
    } else {
        notes.splice(noteIndex, 1)
        saveNotes(notes)
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes/notes.json')
        const dataJson = dataBuffer.toString()

        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes/notes.json', dataJson)
    console.log(chalk.green('Note saved'))
}