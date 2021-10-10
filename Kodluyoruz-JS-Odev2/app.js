const inputText = document.querySelector('#task');
const addButton = document.querySelector('#liveToastBtn');
const list = document.querySelector('#list')


addButton.addEventListener('click', (e) => {
    if (inputText.value === "" || inputText.value.replace(/\s/g, "").length == 0) {
        $(".error").toast("show");
    } else {
        console.log(inputText.value.length);
        e.preventDefault();
        const newLi = document.createElement('li');
        newLi.innerHTML = inputText.value;
        list.appendChild(newLi);
        $(".success").toast("show");

        const newSpan = document.createElement('span');
        newSpan.innerHTML = 'x';
        newSpan.className = "close";
        newLi.appendChild(newSpan);
        closeLi();
        toggleClass();
    }

    inputText.value = "";
})

function closeLi() {
    const close = document.querySelectorAll('.close');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = 'none';
            close[i].parentElement.remove();
        })
    }
}

function toggleClass() {
    const listItems = document.getElementsByTagName('li')
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', () => {
            listItems[i].classList.toggle('checked')
        })
    }
}

closeLi()
