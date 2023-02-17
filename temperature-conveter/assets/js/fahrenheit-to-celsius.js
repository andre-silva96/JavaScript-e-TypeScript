let input = document.querySelector('#input-temp');
let output = document.querySelector('.output-temp');
let button = document.querySelector('#button-converter');
let buttonInverter = document.querySelector('#button-inverter');
let buttonSelect = document.querySelectorAll('.select-converter');

buttonSelect[0].addEventListener('click', () => {
    document.querySelector('form').style.display = 'block';
    document.querySelector('h2').innerHTML = 'Fahrenheit &rightarrow; Celsius';
    buttonSelect[0].setAttribute('data-name', 'fahrenheit-celsius');

    if(buttonSelect[0].getAttribute('data-name') == 'fahrenheit-celsius') {
        buttonSelect[0].classList.add('active');
        buttonSelect[1].classList.remove('active');
        buttonSelect[2].classList.remove('active');

        input.setAttribute('name', 'fahrenheit');
        output.innerHTML = '';
        
        converterFahrenheitAndCelsius();
    }
})

function converterFahrenheitAndCelsius() {
    button.addEventListener('click', converterTemperature);
    buttonInverter.addEventListener('click', inverterConverter);

    function converterTemperature() {
        if(input.getAttribute('name') == 'fahrenheit') {
            fahrenheitToCelsius();
        } else if (input.getAttribute('name') == 'celsius') {
            celsiusToFahrenheit();
        }
    }

    function fahrenheitToCelsius() {
        let fahrenheit = Number(input.value);
    
        if(typeof fahrenheit != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let celsius = Number((fahrenheit - 32) / 1.8);
            output.innerHTML = `${fahrenheit}°F equivalem a ${celsius.toFixed(2)}°C.`;
            input.value = '';
        }
    }

    function celsiusToFahrenheit() {
        let celsius = Number(input.value);
    
        if(typeof celsius != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let fahrenheit = Number(celsius * 9 / 5 + 32);
            output.innerHTML = `${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F.`;
            input.value = '';
        }
    }

    function inverterConverter() {
        if(input.getAttribute('name') == 'fahrenheit') {
            input.setAttribute('name', 'celsius');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Celsius &rightarrow; Fahrenheit';
            output.innerHTML = ''   
        } else if (input.getAttribute('name') == 'celsius') {
            input.setAttribute('name', 'fahrenheit');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Fahrenheit &rightarrow; Celsius';
            output.innerHTML = '';
        }
    }
}