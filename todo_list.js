document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".addtToList");
    const task = document.getElementById("newDo");
    const todoList = document.querySelector(".list")

    btn.addEventListener("click", function () {
        const taskText = task.value.trim()

        if (taskText !== "") {
            const newTask = document.createElement("div");
            newTask.className = "newTask";

            const h4 = document.createElement("p");
            h4.className = "task";
            h4.innerText = taskText;

            const button1 = document.createElement("button");
            button1.className = "done";
            button1.innerHTML = '<i class="fas fa-check"></i>';

            button1.addEventListener("click", function () {
                newTask.classList.toggle("taskDone")
            })

            const button2 = document.createElement("button");
            button2.className = "delete";
            button2.innerHTML = '<i class="far fa-trash-alt"></i>';
            button2.addEventListener("click", function () {
                newTask.remove()
            })
            newTask.appendChild(h4);
            newTask.appendChild(button1);
            newTask.appendChild(button2);

            todoList.appendChild(newTask);

            task.value = "";
        }
    })
})
