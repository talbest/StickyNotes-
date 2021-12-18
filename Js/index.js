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

        _addAnimation(notes[index], note);

        _addCheckedClass(notes[index], note)

        DOM.noteContainer.append(note);
    }

    function _addAnimation(noteFromState, noteUi) {
        if (!noteFromState.hasAnimated) {
            noteUi.classList.add("animated");
            noteFromState.hasAnimated = true;
            setTimeout(function () {
                noteUi.classList.remove("animated");
            }, 2000);
        }
    }

    function _addCheckedClass(noteFromState, noteUi) {
        if (noteFromState.hasChaked) {
            noteUi.classList.add("chaked");
        }

        else { noteUi.classList.remove("chaked") };

    }
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

