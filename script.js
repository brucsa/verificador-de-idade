function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //FullYear: 4 digitos do ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        //Erro: Se a caixa estiver vazia ou o ano for maior que o atual 
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        //getElementsByName('radsex') - Para puxar a opção selecionada dentro da tag radsex
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/m-criança.jpg')
            } else if (idade <= 17) {
                //jovem
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/m-adulto.jpg')
            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'imagens/m-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/f-criança.jpg')
                //criança
            } else if (idade <= 17) {
                //jovem
                img.setAttribute('src', 'imagens/f-jovem.jpg')
            } else if (idade <= 50) {
                //adulta
                img.setAttribute('src', 'imagens/f-adulta.jpg')
            } else if (idade > 50) {
                //idosa
                img.setAttribute('src', 'imagens/f-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos uma pessoa com ${idade} anos.`
        res.appendChild(img) //appendChild - adicionar um elemento
    }
}