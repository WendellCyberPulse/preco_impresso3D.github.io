function calcularCusto() {
    let tempo = parseFloat(document.getElementById('tempo').value) || 0;
    let filamento = parseFloat(document.getElementById('filamento').value) || 0;
    let margemLucro = parseFloat(document.getElementById('lucro').value) || 50;
    
    let precoKWh = 7.3575; // Média calculada
    let potencia = 0.1; // Impressora consome 100W (0.1 kW)
    let precoFilamentoKg = 94.90; // Preço do filamento por kg
    
    let custoEnergia = precoKWh * potencia * tempo;
    let custoFilamento = (precoFilamentoKg / 1000) * filamento;
    let custoTotal = custoEnergia + custoFilamento;
    let precoFinal = custoTotal * (1 + margemLucro / 100);
    
    document.getElementById('resultado').innerHTML = `
        <p><strong>Custo de Energia:</strong> R$ ${custoEnergia.toFixed(2)}</p>
        <p><strong>Custo do Filamento:</strong> R$ ${custoFilamento.toFixed(2)}</p>
        <p><strong>Custo Total:</strong> R$ ${custoTotal.toFixed(2)}</p>
        <p><strong>Preço Final (com lucro de ${margemLucro}%):</strong> R$ ${precoFinal.toFixed(2)}</p>
    `;
    document.getElementById('resultadoModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('resultadoModal').style.display = 'none';
}