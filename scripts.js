const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        //Remove o realce de contorno do elemento
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        //Adiciona o realce no contorno do elemento
        personagem.classList.add('selecionado');
    })
})