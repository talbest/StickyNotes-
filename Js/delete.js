function deleteBtn() {
    const parantId = this.parentElement.id;
    const noteIndex = state.notes.findIndex(function (current) {
        return current.id === parantId;
    })
    if (noteIndex != -1) {
        state.notes.splice(noteIndex, 1);
        localStorage.setItem(CONFIG.NOTES, JSON.stringify(state.notes));
        draw(state.notes);
    }

}