function login() {
  document.getElementById("home").hidden = true;
  document.getElementById("dashboard").hidden = true;
  document.getElementById("loginPage").hidden = false;
}

function openDashboard() {
  document.getElementById("home").hidden = true;
  document.getElementById("loginPage").hidden = true;
  document.getElementById("dashboard").hidden = false;
}

function enterDashboard() {
  const name = document.getElementById("studentName").value.trim();

  if (!name) {
    document.getElementById("loginMessage").textContent =
      "Please enter your name.";
    return;
  }

  document.getElementById("welcomeMessage").textContent =
    "Welcome, " + name + "!";
  document.getElementById("loginPage").hidden = true;
  document.getElementById("dashboard").hidden = false;
}

function addTask() {
  const input = document.getElementById("subject");
  const task = input.value.trim();

  if (!task) {
    alert("Please enter a subject or task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task + " ";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Delete";
  removeButton.onclick = function () {
    li.remove();
  };

  li.appendChild(removeButton);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function goHome() {
  document.getElementById("loginPage").hidden = true;
  document.getElementById("dashboard").hidden = true;
  document.getElementById("home").hidden = false;
}