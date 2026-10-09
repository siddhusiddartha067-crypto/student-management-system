function showPage(pageId) {
  const pages = ["home", "dashboard", "study", "career", "coding"];

  pages.forEach(function (id) {
    document.getElementById(id).hidden = id !== pageId;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task + " ";

  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(remove);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(
    document.querySelectorAll("#taskList > li")
  ).map(function (li) {
    return li.firstChild.textContent.trim();
  });

  localStorage.setItem("careerPilotTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(
    localStorage.getItem("careerPilotTasks") || "[]"
  );

  tasks.forEach(function (task) {
    const input = document.getElementById("taskInput");
    input.value = task;
    addTask();
  });
}

function askStudy() {
  const question = document.getElementById("studyQuestion").value.trim();
  const answer = document.getElementById("studyAnswer");

  if (!question) {
    answer.textContent = "Please enter your question first.";
    return;
  }

  answer.textContent =
    "AI is not connected yet. A secure AI backend is needed to answer: " +
    question;
}

window.addEventListener("DOMContentLoaded", loadTasks);