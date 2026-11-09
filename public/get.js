function carregarTabela() {
    fetch('http://localhost:3000/pessoas')
        .then(resposta => resposta.json())
        .then(dados => {
            //Selecionar a tabela tbody
            var tabelaCorpo = document.getElementById('tabela-corpo')
            tabelaCorpo.innerHTML = ""

            //Para cada objeto do JSON, cria uma linha da tabela
            dados.forEach(objeto => {
                var tr = document.createElement('tr')
                
                var tdNome = document.createElement('td')
                var tdSobrenome = document.createElement('td')
                var tdCPF = document.createElement('td')
                var tdEmail = document.createElement('td')
                var tdRua = document.createElement('td')
                var tdCEP = document.createElement('td')
                var tdCidade = document.createElement('td')
                var tdEstado = document.createElement('td')
                var tdTelefone = document.createElement('td')
                var tdAcoes = document.createElement('td')

                //Preenche as celula da linha com as informações
                tdNome.innerText = objeto.nome || ''
                tdSobrenome.innerText = objeto.sobrenome || ''
                tdCPF.innerText = objeto.cpf || ''
                tdEmail.innerText = objeto.email || ''
                tdRua.innerText = objeto.rua || ''
                tdCEP.innerText = objeto.cep || ''
                tdCidade.innerText = objeto.cidade || ''
                tdEstado.innerText = objeto.estado || ''
                tdTelefone.innerText = objeto.telefone || ''
                tdAcoes.innerHTML = `<a href="put.html">Editar</a> | <a href="delete.html">Apagar</a>`

                tr.appendChild(tdNome)
                tr.appendChild(tdSobrenome)
                tr.appendChild(tdCPF)
                tr.appendChild(tdEmail)
                tr.appendChild(tdRua)
                tr.appendChild(tdCEP)
                tr.appendChild(tdCidade)
                tr.appendChild(tdEstado)
                tr.appendChild(tdTelefone)
                tr.appendChild(tdAcoes)

                tabelaCorpo.appendChild(tr)
            })
        })
}

carregarTabela();

function buscarPorCPF() {
    var cpfBusca = document.getElementById('cpfBusca').value
    fetch('http://localhost:3000/pessoas')
        .then(resposta => resposta.json())
        .then(dados => {
            var tabelaCorpo = document.getElementById('tabela-corpo')
            tabelaCorpo.innerHTML = ""
            var filtrados = dados.filter(p => p.cpf == cpfBusca)
            
            filtrados.forEach(objeto => {
                var tr = document.createElement('tr')
                tr.innerHTML = `
                    <td>${objeto.nome || ''}</td>
                    <td>${objeto.sobrenome || ''}</td>
                    <td>${objeto.cpf || ''}</td>
                    <td>${objeto.email || ''}</td>
                    <td>${objeto.rua || ''}</td>
                    <td>${objeto.cep || ''}</td>
                    <td>${objeto.cidade || ''}</td>
                    <td>${objeto.estado || ''}</td>
                    <td>${objeto.telefone || ''}</td>
                    <td><a href="put.html">Editar</a> | <a href="delete.html">Apagar</a></td>
                `
                tabelaCorpo.appendChild(tr)
            })
        })
}