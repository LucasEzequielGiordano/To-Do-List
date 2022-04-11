// capturing elements
const input = document.querySelector("input");
const btnAdd = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const emptyTask = document.querySelector(".emptyTask");
const deleteAll = document.getElementById("btnDeleteAll")

// event add task capturing the input value
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = `<input type="checkbox" id="check"> ${text}`;
        li.appendChild(p);
        li.appendChild(btnDelete());
        ul.appendChild(li);
        input.value = "";
        emptyTask.style.display = "none";
    }
});

// event button delete all
deleteAll.addEventListener("click", (e) => {
    e.preventDefault()
    ul.textContent = ""
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
        emptyTask.style.display = "block";
    }
})

// event function delete single task
function btnDelete() {
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️";
    btnDelete.className = "btnDelete";
    btnDelete.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            emptyTask.style.display = "block";
        }
    });
    return btnDelete;
}