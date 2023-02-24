"use strict";
let input = document.querySelector('#input-button');
input.addEventListener('click', addToDoList);
function addToDoList() {
    let input = document.querySelector('#input-text');
    let sectionList = document.querySelector('.to-do-list-section');
    let ul = document.querySelector('ul');
    if (input.value != '') {
        sectionList.appendChild(ul);
        createItem(input, ul);
        input.value = '';
    }
    else {
        alert('Preencha o campo!');
    }
}
function createItem(input, ul) {
    let li = document.createElement('li');
    li.innerText += input.value;
    ul.appendChild(li);
}
