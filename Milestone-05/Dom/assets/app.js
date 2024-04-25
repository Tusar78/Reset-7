const addColor = document.querySelector(".myBtn");
addColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgreen";
});

setTimeout(() => {
  document.body.style.backgroundColor = "";
}, 3000);


const box = document.querySelector(".box");
