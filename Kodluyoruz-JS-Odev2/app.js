const inputText = document.querySelector("#task");
const addButton = document.querySelector("#liveToastBtn");
const list = document.querySelector("#list");

//Function for deleting tasks with clicking X
function closeLi() {
  const close = document.querySelectorAll(".close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.style.display = "none";
      close[i].parentElement.remove();
    });
  }
}

//event listener add and called for toggling
function addItem() {
  list.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
      }
    },
    false
  );
}

function newItem(e) {
  if (
    inputText.value === "" ||
    inputText.value.replace(/\s/g, "").length == 0
  ) {
    $(".error").toast("show");
  } else {
    //console.log(inputText.value.length); testing input
    e.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerHTML = inputText.value;
    list.appendChild(newLi);
    $(".success").toast("show");

    const newSpan = document.createElement("span");
    newSpan.innerHTML = "x";
    newSpan.className = "close";
    newLi.appendChild(newSpan);
  }
  inputText.value = "";
  closeLi();
}

addButton.addEventListener("click", newItem);

closeLi();
addItem();
