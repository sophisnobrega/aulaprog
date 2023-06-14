function acharChoquePlaca(){ //Aqui reconheço um elemento no HTML para realizar a consulta de choque por placa do vagão
    console.log('Acharchoque1')
    var user = {
        placa: document.getElementById('placa').value,
    }
    fetch('http://localhost:9696/choqueVagao', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
        var resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(data); // Atualiza o conteúdo do elemento com a resposta recebida
    })
    .catch(err => console.log(err));
} 
function acharChoqueTipo(){ //Aqui reconheço um elemento no HTML para realizar a consulta de choque por tipo do vagão
    console.log('Acharchoque2')
    var user = {
        tipo_vagao: document.getElementById('tipo_vagao').value,
    }
    fetch('http://localhost:9696/choqueVagaoTipo', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
        var resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(data); // Atualiza o conteúdo do elemento com a resposta recebida
    })
     .catch(err => console.log(err));
}

