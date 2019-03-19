console.log("gOOD JOb FrieNDo LoVe YoU bUdDy")

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries)


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

// const myJournalEntries = [
//     {
//         date: "March 1, 2019",
//         conceptsCovered: "JavaScript Objects",
//         journalEntry: "We have been learning about JavaScript Objects and data structures. We've learned how to select values",
//         mood: "Tired from learning lots of things but good."
//     },
//     {
//         date: "March 1, 2019",
//         conceptsCovered: "Learning Styles",
//         journalEntry: "There are many different styles of learning. No style of learning is better than another!",
//         mood: "Delighted"
//     }
// ];
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/


// myJournalEntries.push(entryOne, entryTwo);
// console.log(myJournalEntries)

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/





  
// const getEntries = () => {
//     return fetch("http://localhost:3000/") // Fetch from the API
//         .then(response => response.json())
// }

// const postEntries = (newEntry) => {
//     return fetch("http://localhost:3000/entries", {
//             method: "POST",
//             body: JSON.stringify(newEntry),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(response => response.json())
// } // What should happen when we finally have the array?
// postEntries(getEntries)
// Invoke the render function
// renderJournalEntries(myJournalEntries)

