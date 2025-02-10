// const userName = document.getElementById("user");
// const knopka = document.getElementById("btn");
// const elForm = document.getElementById("form");
// const colorPicker = document.getElementById("pickClr");
// const colorBack = document.getElementById("back");

// knopka.addEventListener("click", (anonim) => {
//     anonim.preventDefault();
//     userName.style.color = colorPicker.value;
//     document.body.style.backgroundColor = colorBack.value;
//  const dom = document.createElement("h1");
//  dom.textContent = `Hello, ${userName.value}!`;
//  elForm.appendChild(dom);
//  userName.value = "";
// })

const elForm = document.getElementById("form");
const elInput = document.getElementById("user");
const box = document.getElementById("list");

elForm.addEventListener("submit", (anonim) => {
    anonim.preventDefault();
    const inputningQiymati = elInput.value;


    const newLi = document.createElement("li");
    const userName = document.createElement("h2");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    newLi.className = "item"

    userName.textContent = inputningQiymati;
    check.type = "checkbox";
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";

    newLi.append(check,userName,deleteBtn,editBtn);
    box.append(newLi);

    elInput.value = "";
})

const userName = document.createElement("h2");
const check = document.createElement("input");

const deleteBtn = document.createElement("button");
const editBtn = document.createElement("button");

newLi.className = "item";

userName.textContent = inputningQiymati;
check.type = "checkbox";

deleteBtn.textContent = "Delete";
editBtn.textContent = "Edit";

deleteBtn.addEventListener("click", () => {
  newLi.remove();
});

editBtn.addEventListener("click", () => {
  const result = prompt("O'zgartiring", userName.textContent);
  if (result) {
    userName.textContent = result;
  }
});

check.addEventListener("change", () => {
  if (check.checked) {
    userName.style.textDecoration = "line-through";
  } else {
    userName.style.textDecoration = "none";
  }
});

newLi.append(check, userName, deleteBtn, editBtn);
box.append(newLi);