const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const deleteAll = document.getElementById("btnDeleteAll")

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = `<input type="checkbox" id="check"> ${text}`;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        input.value = "";
        empty.style.display = "none";
    }
});


deleteAll.addEventListener("click", () => {
    ul.textContent = ""
})

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "btnDelete";
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;
}