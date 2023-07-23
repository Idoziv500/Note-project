const notes = [];

const addNewNote = () => {
    var newNote = new Object();
    newNote.task = document.getElementById("task").value;
    newNote.date = document.getElementById("date").value;
    newNote.time = document.getElementById("time").value;
    notes.push(newNote);
    console.log(newNote)
    enterNote();
    // document.getElementById("myForm").reset();
}

const enterNote = () => {
    var data = "";
    notes.map((item) => {
        data +=     `
                    <div class="newImage">
                    <div class="newText">
                    <ul>
                    <li>${item.task}</li>
                    <li class="date">${item.date}</li>
                    <li class="time">${item.time}</li>
                    </ul>
                    </div>
                    </div>
                    `
    });
    document.getElementById("noteImage").innerHTML = data;
}

