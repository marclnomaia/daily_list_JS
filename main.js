function AddNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task").value;
  var listItem = document.createElement("li");
  const textElement = document.createTextNode(text);
  list.appendChild(textElement);
  listItem.appendChild(listItem);
}