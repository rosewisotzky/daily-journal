console.log("gOOD JOb FrieNDo LoVe YoU bUdDy")
/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const entryOne = {
//     date: "March 1, 2019",
//     conceptsCovered: "JavaScript Objects",
//     journalEntry: "We have been learning about JavaScript Objects and data structures. We've learned how to select values",
//     mood: "Tired from learning lots of things but good."
// }
// const entryTwo = {
//     date: "March 1, 2019",
//     conceptsCovered: "Learning Styles",
//     journalEntry: "There are many different styles of learning. No style of learning is better than another!",
//     mood: "Delighted"
// }

const myJournalEntries = [
    {
        date: "March 1, 2019",
        conceptsCovered: "JavaScript Objects",
        journalEntry: "We have been learning about JavaScript Objects and data structures. We've learned how to select values",
        mood: "Tired from learning lots of things but good."
    },
    {
        date: "March 1, 2019",
        conceptsCovered: "Learning Styles",
        journalEntry: "There are many different styles of learning. No style of learning is better than another!",
        mood: "Delighted"
    }
];
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    // Create your own HTML structure for a journal entry
    return `<h1>${date}</h1>
            <section>${concept}</section>
            <p>${entry}</p>
            <aside>${mood}</aside>

    `
}


// myJournalEntries.push(entryOne, entryTwo);
// console.log(myJournalEntries)

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const entryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    for (let i = 0; i < myJournalEntries.length; i++) {
        entryLog.innerHTML += makeJournalEntryComponent(
            entries[i].date,
            entries[i].conceptsCovered,
            entries[i].journalEntry,
            entries[i].mood
        )
    }
}

// Invoke the render function
renderJournalEntries(myJournalEntries)