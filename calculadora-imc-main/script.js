document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    // Correção automática se o usuário digitar em centímetros (ex: 175) em vez de metros (1.75)
    if (altura > 3) {
        altura = altura / 100;
    }
    
    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        
        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 25) classificacao = 'Peso normal';
        else if (imc < 30) classificacao = 'Sobrepeso';
        else classificacao = 'Obesidade';
        
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc} <br>(${classificacao}).`;
    }
});