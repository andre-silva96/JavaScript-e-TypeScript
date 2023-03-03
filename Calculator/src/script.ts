function calcNumber(n: number) {
    let displayTop = document.querySelector('.display-top') as HTMLElement;
    displayTop.innerHTML += n;
}

function cleanDisplay() {
    let displayTop = document.querySelector('.display-top') as HTMLElement;
    let displayBottom = document.querySelector('.display-bottom') as HTMLElement;
    let numberZero: string | number = '0';

    displayTop.innerHTML = '';
    displayBottom.innerHTML = numberZero;
}

function backspace():void {
    let displayTop: any | string = document.querySelector('.display-top')?.innerHTML;
    let array: string[] = [];
    array.push(displayTop);
    console.log(array)
    displayTop.innerText = displayTop.substring(0, displayTop.length -1);
}

function addNumbers(): void {
    let displayTop: any = document.querySelector('.display-top')?.innerHTML;

    let displayBottom = document.querySelector('.display-bottom') as HTMLInputElement;

    if(displayTop) {
        displayBottom.innerHTML = eval(displayTop);
    } else {
        alert('Insira um número no campo!');
        displayBottom.innerHTML = '';
    }
}