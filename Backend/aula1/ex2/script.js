// Seleciona os elementos do formulário e o elemento de resultado no DOM
const form = document.getElementById('imc-form');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultado = document.getElementById('resultado');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores inseridos e converte para número de ponto flutuante
    const peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    // Verifica se os valores inseridos são números e se a altura é maior que zero
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para peso e altura';
        return;
    }

    // Converte a altura de centímetros para metros se necessário (remova esta linha se a altura já estiver em metros)
    altura = altura / 100;

    // Calcula o IMC com a altura em metros
    const imc = peso / (altura * altura);

    // Determina a classificação baseada no valor do IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc < 25) {
        classificacao = 'Normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    // Exibe o resultado formatado com duas casas decimais e a classificação
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});