const inputText = document.querySelector('#task');
const addButton = document.querySelector('#liveToastBtn');
const list = document.querySelector('#list')

addButton.addEventListener('click', (e) => {
    if(inputText.value != "") {
        e.preventDefault();
        const newLi = document.createElement('li');
        newLi.innerHTML = inputText.value;
        list.appendChild(newLi);

        const newSpan = document.createElement('span');
        newSpan.innerHTML = 'x';
        newSpan.className = "close";
        newLi.appendChild(newSpan);
    }
    closeLi();

    inputText.value = "";
})

function closeLi() {
    const close = document.querySelectorAll('.close');
    for (let i=0; i<close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = 'none';
            close[i].parentElement.remove();
        })
    }
}

closeLi()