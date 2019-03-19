console.log("truly a capable mind i tell u what")

const makeJournalEntryComponent = (date, concept, entry, mood) => {
    // Create your own HTML structure for a journal entry
    return `<h1>${date}</h1>
            <section>${concept}</section>
            <p>${entry}</p>
            <aside>${mood}</aside>

    `
}


const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        entryLog.innerHTML += makeJournalEntryComponent(
            entries[i].date,
            entries[i].conceptsCovered,
            entries[i].journalEntry,
            entries[i].mood
        )
    }
}