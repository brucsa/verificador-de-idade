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
            if (idade >= 0 && idade <)
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}