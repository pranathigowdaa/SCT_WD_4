document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    let taskDateTime = document.getElementById("taskDateTime").value;

    if (taskInput === "" || taskDateTime === "") {
        alert("Please enter a task and set date & time");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput} <br><small>${taskDateTime}</small></span>
        <div>
            <button onclick="markCompleted(this)">✔</button>
            <button onclick="editTask(this)">✏</button>
            <button onclick="deleteTask(this)">🗑</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskDateTime").value = "";
}

function markCompleted(button) {
    let task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function editTask(button) {
    let task = button.parentElement.parentElement;
    let text = task.querySelector("span").childNodes[0].textContent.trim();
    let dateTime = task.querySelector("small").textContent;
    
    let newText = prompt("Edit task:", text);
    let newDateTime = prompt("Edit date & time:", dateTime);

    if (newText && newDateTime) {
        task.querySelector("span").innerHTML = `${newText} <br><small>${newDateTime}</small>`;
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}
