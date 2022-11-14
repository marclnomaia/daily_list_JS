function AddNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;

  if (text.length === 0) {
    alert('task need to has at least 01 character');
    return;
  }
  var listItem = document.createElement("li");

  const textElement = document.createTextNode(text);
  listItem.appendChild(textElement);
  list.appendChild(listItem);
  listItem.className = "list-task";
}