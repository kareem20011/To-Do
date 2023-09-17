let push = document.getElementById("push");
let input = document.querySelector("input");
let tasks = document.getElementById("tasks");
push.onclick = () => {
  if (input.value.length == 0) {


    
    alert("please enter task");



  } else {
    tasks.innerHTML += `
        <div class='task'>
            <span id='taskName'>${input.value}</span>
            <button class='delete'><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    let currentTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    let task = document.querySelectorAll(".task");
    for (let i = 0; i < task.length; i++) {
      task[i].onclick = function () {
        this.classList.toggle("combleted");
      };
    }
    input.value = "";
  }
};
