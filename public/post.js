//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('identificadorCPF').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var rua = document.getElementById('rua').value
    var cep = document.getElementById('cep').value
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var telefone = document.getElementById('telefone').value

    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            email: email,
            senha: senha,
            rua: rua,
            cep: cep,
            cidade: cidade,
            estado: estado,
            telefone: telefone
        }) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.json()) //Converte a resposta para JSON
}