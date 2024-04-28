const todoWrap = document.createElement("div");
todoWrap.className = "todo-wrap";

const todoTitle = document.createElement("h2");
todoTitle.className = "todo-title";
todoTitle.innerHTML = "Created List: ";

todoWrap.append(todoTitle);

// console.log(userInput);

const lists = document.createElement("ul");
lists.className = "list";

while (true) {
  let userInput = prompt("Enter your data", "");

  if (userInput === null) {
    break;
  } else {
    let newLi = document.createElement("li");
    newLi.className = "list-item";
    newLi.textContent = userInput;
    lists.append(newLi);
  }
}

// for (let i = 0; i < 5; i++) {
//   let userInput = prompt("Enter your data", "");

//   //   console.log(userInput);
//   if (userInput === null) {
//     break;
//   } else {
//     console.log(userInput);
//     let newLi = document.createElement("li");
//     newLi.className = "list-item";
//     newLi.textContent = userInput;
//     lists.append(newLi);
//   }
// }

todoWrap.append(lists);

document.body.append(todoWrap);
