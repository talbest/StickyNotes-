function getNoteUi(note) {
    const outerdiv = document.createElement("div");
    outerdiv.id = note.id;
    outerdiv.className = "col-6 mt-4 ms-4 note";
    outerdiv.addEventListener("mouseenter", () => {
        _showbutton(deleateButton)
        _showbutton(checkButton)
    })
    outerdiv.addEventListener("mouseleave", () => {
        _hidebutton(deleateButton)
        _hidebutton(checkButton)
    })

    const noteData = document.createElement("p");
    noteData.className = "pInNote";
    noteData.innerText = `${note.data}`

    const timeStamp = document.createElement("div");
    timeStamp.className = "row timeStamp";
    const time = document.createElement("h6");
    time.innerText = `${note.date}- ${note.hour}`
    const deleateButton = _getDeleateIcon();
    const checkButton = _getCheckIcon();
    timeStamp.append(time);
    outerdiv.append(noteData, deleateButton, timeStamp, checkButton,);

    function _getDeleateIcon() {
        const delBtn = document.createElement("i")
        delBtn.className = "bi bi-x-square-fill delBtn hidden"
        delBtn.addEventListener("click", deleteBtn)
        return delBtn
    }

    function _showbutton(button) {
        if (button.classList.contains("hidden")) {
            button.classList.remove("hidden")
        }
    }

    function _hidebutton(button) {
        if (!button.classList.contains("hidden")) {
            button.classList.add("hidden")
        }
    }


    function _getCheckIcon() {
        const checkBtn = document.createElement("i")
        checkBtn.className = "bi bi-check checkBtn hidden"
         checkBtn.addEventListener("click", checkbutton)
        return checkBtn
    }



    return outerdiv;
}