document.addEventListener(DOMContentLoaded, () =>{
    fetchData()
})

const fetchData = () => {
    const ul = document.getElementById('list');
    fetch('https://json.placeholder.typicode.com/todos', { 
        method: 'GET',
        headers:{
            'Contet-Type':'application/json',
        },
    })
    .then(response => response.json())
    .then(todos => {
        todos.map(todo => {
            const li = document.createElement('li');
            li.innerHTML = todo.title;
            ul.appendChild(li);
        })
    }).catch(err => console.log(err))
}

const fetchDataWithAsyncAwait = async () => {
    try{
        const ul = document.getElementById('list');
        const result = await fetch('https://json.placeholder.typicode.com/todos');
        const todos = await result.json();
        todos.map(todo => {
            const li = document.createElement('li');
            li.innerHTML = todo.title;
            ul.appendChild(li);
        })
    } catch(errror) {
        console.log(errror);
    }
}