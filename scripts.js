function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value; //PEGA O NOME
    const mensagem = document.getElementById('mensagem').value; //PEGA A MENSAGEM
    const telefone = '5511964941597'; //PEGA O TELEFONE

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`; //FORMATA A MENSAGEM, CRIA O FORMATO
    const msgFormatada = encodeURIComponent(texto); //AJEITA A MESAGEM, CORRIGE

    const url = `https://wa.me/${telefone}?text=${msgFormatada}` //ENVIA A MENSAGEM PELO WHATS

    window.open(url, '_blank'); //ABRE A URL EM UMA PAGINA EM BRANCO
}