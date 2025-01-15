const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

// eslint-disable-next-line no-unused-vars
const addTask = () => {
  let item = inputBox.value;
  if (item === "") alert("You must write something!");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") e.target.classList.toggle("checked");
    else if (e.target.tagName === "SPAN") e.target.parentElement.remove();
    saveData();
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTasks();
