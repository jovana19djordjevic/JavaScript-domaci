const logedIn = localStorage.getItem("logedIn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks);

const saveTask = window.localStorage.getItem("tasks");

if (logedIn === null) {
	window.location.href = "index.html";
}

const taskList = document.querySelector("#taskList");

if (tasks.length >= 1) {
	for (let task of tasks) {
		let singleTask = document.createElement("div");
		let taskName = document.createElement("p");
		taskName.innerText = task.name;

		let deleteTask = document.createElement("button");
		deleteTask.setAttribute("data-task-id", task.id);
		deleteTask.innerText = "Obrisi zadatak";
		deleteTask.addEventListener("click", () => {
			singleTask.remove();
		});

		singleTask.append(taskName, deleteTask);

		taskList.append(singleTask);
	}
}

document.querySelector("#createTask").addEventListener("click", () => {
	const taskName = document.querySelector("#taskName").value;

	const dateTime = new Date();

	const id = dateTime.getTime();

	tasks.push({
		id: id,
		name: taskName,
	});

	const jasonTasks = JSON.stringify(tasks);

	localStorage.setItem("tasks", jasonTasks);

	const lastTask = tasks[tasks.length - 1];

	let singleTask = document.createElement("div");
	singleTask.setAttribute("data-task-id", lastTask.id);

	let taskTitle = document.createElement("p");
	taskTitle.innerText = lastTask.name;

	let deleteTask = document.createElement("button");
	deleteTask.setAttribute("data-task-id", lastTask.id);
	deleteTask.innerText = "Obrisi zadatak";
	deleteTask.addEventListener("click", () => {
		singleTask.remove();
	});

	document.querySelector("#taskName").value = "";

	singleTask.append(taskTitle, deleteTask);

	taskList.append(singleTask);
});
