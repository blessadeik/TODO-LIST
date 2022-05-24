// JavaScript for TodoList

document.addEventListener('DOMContentLoaded', () => {

function newTasks(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('inputTask').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputTask === ''){
        alert("Input a Task");
    }else{
        document.getElementById('myUl').appendChild(li);
    }

    document.getElementById("inputTask").value = " ";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    li.appendChild(span);
}


})