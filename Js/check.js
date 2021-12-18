function checkbutton() {
    const parantId = this.parentElement.id;
    const noteindex = state.notes.findIndex(function (current) {
        return current.id === parantId;
    })

    if (noteindex != -1) {
        const relevantNote = state.notes[noteindex]
        relevantNote.hasChaked = !relevantNote.hasChaked;
        localStorage.setItem(CONFIG.NOTES, JSON.stringify(state.notes));
        draw(state.notes);
    }
}