let input = document.querySelector('#input-button') as HTMLInputElement;

input.addEventListener('click', addToDoList);

function addToDoList(): void {
    let input = document.querySelector('#input-text') as HTMLInputElement;
    let sectionList = document.querySelector('.to-do-list-section') as HTMLElement;
    let ul = document.querySelector('ul') as HTMLElement;

    if(input.value != '') {
        sectionList.appendChild(ul);

        createItem(input, ul);

        input.value = '';
    } else {
        alert('Preencha o campo!');
    }
}

function createItem(input: HTMLInputElement, ul:HTMLElement) {
    let li = document.createElement('li');
    li.innerText += input.value;
    ul.appendChild(li);
}