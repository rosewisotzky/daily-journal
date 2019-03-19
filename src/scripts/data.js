console.log("wow you are a smartie")

// fetch("http://localhost:3000/entries")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(parsedResponse) {
//     return renderJournalEntries(parsedResponse);
//   });

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}