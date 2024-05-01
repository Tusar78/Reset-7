const todoInput = document.getElementById("todo_input");
const todoBox = document.querySelector(".todo_list");
const todoItem = document.querySelector(".todo_item");
const deleteItem = document.querySelector(".delete-icon");

todoInput.addEventListener('keyup', (e) => {
    let div = document.createElement('div');
    div.className = 'todo_item';
    if (e.key === 'Enter' && e.target.value !== '') {
        console.log(e.target.value);
        div.innerHTML = `<p>${e.target.value}</p>
    <img class="delete-icon" src="./assets/img/trash.png" alt="Delete Icon">`
        todoBox.append(div);
        e.target.value = '';
    }
})

// const items = document.querySelectorAll('.todo_item');
// for (const item of items) {
//     item.addEventListener('click', (e) => {
//         item.style.display = 'none'
//     })
// }

todoBox.addEventListener('click', e => {
    if (e.target.className === 'delete-icon') {
        console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode));
    }
})

