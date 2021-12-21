function sortByPriorty() {
    makeSortedState()
    draw(state.sortedNotes);

}

function makeSortedState() {
    const basicNotes = state.notes.filter(function (current) {
        return current.priorty == "basic"
    })
    const importentNotes = state.notes.filter(function (current) {
        return current.priorty == "importent"
    })
    const urgentNotes = state.notes.filter(function (current) {
        return current.priorty == "urgent"
    })

    state.sortedNotes = [...urgentNotes, ...importentNotes, ...basicNotes]
}

// can make it as the current state   and then set the local storege  
//not sure what is the best way as user exprience id to change his state after a sort 
