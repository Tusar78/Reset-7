function loadData() {
  const JSONLINK = "https://jsonplaceholder.typicode.com/users";
  fetch(JSONLINK)
    .then((response) => response.json())
    .then((data) => dosplayData(data));
}

const dosplayData = (data) => {
  const ul = document.createElement('ul');
  for (const d of data) {
    let li =document.createElement('li');
    li.innerHTML= `${d.name}`;
    ul.append(li);
  }
  document.body.append(ul);
};
