const DOM = {
    notePayload: {
        form: null,
        noteData: null,
        noteDate: null,
        noteTime: null,
    },
    noteContainer: null,
    submitButton: null,
    clearButton: null,
}

const CONFIG = { NOTES: "notes" }
const state = {
    notes: [],
}

function init() {
    DOM.notePayload.form = document.querySelector("#noteForm");
    DOM.notePayload.noteData = DOM.notePayload.form["noteData"];
    DOM.notePayload.noteDate = DOM.notePayload.form["NoteDate"];
    DOM.notePayload.noteTime = DOM.notePayload.form["noteHour"];

    DOM.noteContainer = document.querySelector("#noteContainer");
    DOM.submitButton = document.querySelector("#noteSubmitBtn");
    DOM.clearButton = document.querySelector("#noteClearBtn");

    DOM.submitButton.addEventListener("click", addNote)
    DOM.clearButton.addEventListener("click", releaseForm)

    try {
        const notesString = localStorage.getItem(CONFIG.NOTES);
        const notes = JSON.parse(notesString);
        if (!notes) return;
        state.notes = notes;
    } catch { }
    draw(state.notes);
}

function draw(notes) {
    DOM.noteContainer.innerHTML = "";
    for (let index = 0; index < notes.length; index++) {
        const note = getNoteUi(notes[index]);
        if (!notes) return;

        if (!notes[index].hasAnimated) {
            note.classList.add("animated");
            notes[index].hasAnimated = true;
            setTimeout(function () {
                note.classList.remove("animated");
            }, 2000);
        }

        if (notes[index].hasChaked) {
            note.classList.add("chaked");
        }

        else { note.classList.remove("chaked") };
        DOM.noteContainer.append(note);


    }
    //goind to order the draw to liitle functions 
    // function _addAnimation(noteFromState){

    // }
}

init();

function addNote() {
    const noteData = DOM.notePayload.noteData.value;
    const noteDate = DOM.notePayload.noteDate.value;
    const noteTime = DOM.notePayload.noteTime.value;

    if (isEmpty(noteData) || isEmpty(noteDate) || isEmpty(noteTime)) {
        return alert(`please enter a valid inputs `)
    }

    const note = getNote(noteData, noteDate, noteTime)
    releaseForm()
    state.notes.push(note);
    localStorage.setItem(CONFIG.NOTES, JSON.stringify(state.notes));
    draw(state.notes);

}

function isEmpty(whatToCheck) {
    const answer = !whatToCheck
    return answer;
}

function releaseForm() {
    DOM.notePayload.form.reset();
}

