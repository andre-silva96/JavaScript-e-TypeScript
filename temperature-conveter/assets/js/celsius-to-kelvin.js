buttonSelect[1].addEventListener('click', () => {
    document.querySelector('form').style.display = 'block';
    document.querySelector('h2').innerHTML = 'Celsius &rightarrow; Kelvin';
    buttonSelect[1].setAttribute('data-name', 'celsius-kelvin');

    if(buttonSelect[1].getAttribute('data-name') == 'celsius-kelvin') {
        buttonSelect[1].classList.add('active');
        buttonSelect[0].classList.remove('active');
        buttonSelect[2].classList.remove('active');

        input.setAttribute('name', 'celsius-kelvin');
        output.innerHTML = '';

        converterCelsiusAndKelvin();
    }
})

function converterCelsiusAndKelvin() {
    button.addEventListener('click', converterTemperature);
    buttonInverter.addEventListener('click', inverterConverter);

    function converterTemperature() {
        if(input.getAttribute('name') == 'celsius-kelvin') {
            celsiusToKelvin();
        } else if (input.getAttribute('name') == 'kelvin-celsius') {
            kelvinToCelsius();
        }
    }

    function celsiusToKelvin() {
        let celsius = Number(input.value);
    
        if(typeof celsius != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let kelvin = Number(celsius + 273.15);
            output.innerHTML = `${celsius}°C equivalem a ${kelvin.toFixed(2)}K.`;
            input.value = '';
        }
    }

    function kelvinToCelsius() {
        let kelvin = Number(input.value);
    
        if(typeof kelvin != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let celsius = Number(kelvin - 273.15);
            output.innerHTML = `${kelvin}K equivalem a ${celsius.toFixed(2)}°C.`;
            input.value = '';
        }
    }

    function inverterConverter() {
        if(input.getAttribute('name') == 'kelvin-celsius') {
            input.setAttribute('name', 'celsius-kelvin');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Celsius &rightarrow; Kelvin';
            output.innerHTML = ''   
        } else if (input.getAttribute('name') == 'celsius-kelvin') {
            input.setAttribute('name', 'kelvin-celsius');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Kelvin &rightarrow; Celsius';
            output.innerHTML = '';
        }
    }
}