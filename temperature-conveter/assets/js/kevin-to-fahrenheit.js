buttonSelect[2].addEventListener('click', () => {
    document.querySelector('form').style.display = 'block';
    document.querySelector('h2').innerHTML = 'Kelvin &rightarrow; Fahrenheit';
    buttonSelect[2].setAttribute('data-name', 'kevin-fahrenheit');

    if(buttonSelect[2].getAttribute('data-name') == 'kevin-fahrenheit') {
        buttonSelect[2].classList.add('active');
        buttonSelect[0].classList.remove('active');
        buttonSelect[1].classList.remove('active');

        input.setAttribute('name', 'kelvin-fahrenheit');
        output.innerHTML = '';

        converterKelvinAndFahrenheit();
    }
})

function converterKelvinAndFahrenheit() {
    button.addEventListener('click', converterTemperature);
    buttonInverter.addEventListener('click', inverterConverter);

    function converterTemperature() {
        if(input.getAttribute('name') == 'kelvin-fahrenheit') {
            kelvinToFahrenheit();
        } else if (input.getAttribute('name') == 'fahrenheit-kelvin') {
            fahrenheitToKelvin();
        }
    }

    function kelvinToFahrenheit() {
        let kelvin = Number(input.value);
    
        if(typeof kelvin != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let fahrenheit = Number(1.8 * (kelvin - 273.15) + 32);
            output.innerHTML = `${kelvin}K equivalem a ${fahrenheit.toFixed(2)}°F.`;
            input.value = '';
        }
    }

    function fahrenheitToKelvin() {
        let fahrenheit = Number(input.value);
    
        if(typeof fahrenheit != 'number') {
            alert('Por favor, insira um número válido!');
        } else {
            let kelvin = Number((fahrenheit - 32) * 5 / 9 + 273.15);
            output.innerHTML = `${fahrenheit}°F equivalem a ${kelvin.toFixed(2)}K.`;
            input.value = '';
        }
    }

    function inverterConverter() {
        if(input.getAttribute('name') == 'kelvin-fahrenheit') {
            input.setAttribute('name', 'fahrenheit-kelvin');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Fahrenheit &rightarrow; Kelvin';
            output.innerHTML = ''   
        } else if (input.getAttribute('name') == 'fahrenheit-kelvin') {
            input.setAttribute('name', 'kelvin-fahrenheit');
            let subTitle = document.querySelector('h2');
            subTitle.innerHTML = 'Kelvin &rightarrow; Fahrenheit';
            output.innerHTML = '';
        }
    }
}