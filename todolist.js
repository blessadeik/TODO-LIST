function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputTask").value;
  var t = document.createTextNode(inputValue);
  ul.id ='list'
  li.appendChild(t);
  if (inputValue === '') {
    alert("Input a Task to Proceed");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("inputTask").value = "";
}