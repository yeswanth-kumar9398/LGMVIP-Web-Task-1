var tasks = [];
function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskDescription = taskInput.value;
    if (taskDescription !== ''){
    tasks.push(taskDescription);
    taskInput.value = '';
    renderTaskList();
    }
}
function deleteTask(index){
    tasks.splice(index, 1);
    renderTaskList();
}
function renderTaskList(){
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (var i = 0; i < tasks.length; i++){
    var task = tasks[i];
    var taskElement = document.createElement('div');
    taskElement.className = 'task';
    var taskDescriptionElement = document.createElement('span');
    taskDescriptionElement.innerText = task;
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', 'deleteTask(' + i + ')');
    var taskActionsContainer = document.createElement('div');
    taskActionsContainer.className = 'task-actions';
    taskActionsContainer.appendChild(deleteButton);
    taskElement.appendChild(taskDescriptionElement);
    taskElement.appendChild(taskActionsContainer);
    taskList.appendChild(taskElement);
    }
}
var taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
    event.preventDefault();
    addTask();
    }
});
