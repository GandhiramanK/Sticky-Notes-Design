const input = document.getElementById("inputNote");
const addButton = document.getElementById("addNoteButton");
const notesArea = document.getElementById("notesArea");

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;
  createNote(text);
  input.value = "";
});

function createNote(content = "") {
  const note = document.createElement("div");
  note.className = "note";

  const textarea = document.createElement("textarea");
  textarea.readOnly = true;
  textarea.value = content;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.textContent = "✏️ Edit";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.disabled = true;
  saveBtn.className = "save";
  saveBtn.textContent = "💾 Save";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.textContent = "❌ Delete";

  editBtn.onclick = () => {
    textarea.readOnly = false;
    textarea.focus();
    saveBtn.disabled = false;
    editBtn.disabled = true;
  };
  saveBtn.onclick = () => {
    textarea.readOnly = true;
    saveBtn.disabled = true;
    editBtn.disabled = false;
  };
  deleteBtn.onclick = () => {
    note.remove();
  };
  note.appendChild(textarea);
  note.appendChild(editBtn);
  note.appendChild(saveBtn);
  note.appendChild(deleteBtn);
  notesArea.appendChild(note);
}
