// function loadData() {
//   const JSONLINK = "https://jsonplaceholder.typicode.com/users";
//   fetch(JSONLINK)
//     .then((response) => response.json())
//     .then((data) => dosplayData(data));
// }

// const dosplayData = (data) => {
//   const ul = document.createElement('ul');
//   for (const d of data) {
//     let li =document.createElement('li');
//     li.innerHTML= `${d.name}`;
//     ul.append(li);
//   }
//   document.body.append(ul);
// };


const loadPhone = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
  const data = await res.json();
  console.log(data.data);
}

loadPhone();