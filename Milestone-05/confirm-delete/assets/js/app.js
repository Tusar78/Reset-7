const selector = (elem) => {
  return document.querySelector(elem);
};

const source = selector(".source");
const deleteBox = selector(".delete-box");
const deleteBtn = selector(".delete-btn");

deleteBtn.addEventListener("click", () => {
  source.style.display = "none";
  deleteBox.value = '';
});

deleteBox.addEventListener("keyup", () => {
  const inputVal = deleteBox.value;
  if (inputVal === "delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});
