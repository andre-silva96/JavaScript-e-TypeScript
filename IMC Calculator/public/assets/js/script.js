var peso = document.getElementById('text-peso');
var altura = document.getElementById('text-altura');
var btn = document.getElementById('button');
var res = document.getElementById('text-res');
var resImc = document.getElementById('number-imc');
function calcIMC(peso, altura) {
    var imc = peso / (altura * altura);
    resImc.innerHTML = imc.toFixed(2).toString();
    if (imc < 18.5) {
        res.innerHTML = 'Seu grau de sobrepreso indica, <strong>Magreza</strong>, Procure ajuda médica, e evite consequências como: Fadida, stress e ansiedade.';
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = 'Seu grau de sobrepeso indica, <strong>Peso normal</strong>, Parabéns, você corre menor risco de doenças cardiácas e vasculares.';
    }
    else if (imc >= 24.9 && imc <= 29.9) {
        res.innerHTML = 'Seu grau de sobrepeso indica, <strong>Sobrepeso</strong>, procure ajuda médica e evite consequências, como: Fadiga, Má circulação e Varizes.';
    }
    else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = 'Seu grau de sobrepeso indica, <strong>Obesidade Grau I</strong>, procure ajuda médica o quanto antes, e evite consequências para sua saúde, como: Diabetes, Angina, Infarto, Aterosclerose.';
    }
    else if (imc >= 35 && imc <= 40) {
        res.innerHTML = 'Seu grau de sobrepreso indica, <strong>Obesidade Grau II</strong>, procure ajuda médica o quanto antes, e evite consequências para sua saúde, como: Apnéia do Sono e Falta de Ar.';
    }
    else {
        res.innerHTML = 'Seu sobre peso indica, <strong>Obesidade Grau III</strong>, procure ajuda médica o quanto antes, para evitar graves consequências a sua saúde, como: Refluxo, Dificuldade de Mobilidade, Escaras, Diabetes, Infarto e AVC.';
    }
}
;
btn.addEventListener('click', function () {
    return calcIMC(+peso.value, +altura.value);
});
