document.addEventListener("DOMContentLoaded", () => {

    const titulo = document.querySelector(".logo h1");
    const subtitulo = document.querySelector(".logo p");
    const cards = document.querySelectorAll(".card");
    const botoes = document.querySelectorAll(".card button");

    titulo.style.opacity = "0";
    subtitulo.style.opacity ="0";

    cards.forEach(card => {
        card.style.opacity ="0";
        card.style.transform ="translateY(40px)";
        card.style.transition =  "all 0.8s ease";
    });

    setTimeout(() => {
        titulo.style.transition = "all 1s ease";
        titulo.style.opacity = "1";
        titulo.style.transform ="translateY(0)"
    },200);

    setTimeout(() => {
        subtitulo.style.transition ="all 1s ease";
        subtitulo.style.opacity ="1";
        subtitulo.style.transform ="translateY(0)";
    },600)

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity ="1";
            card.style.transform ="translateY(0)";
        },800 + index * 250);
    });

    botoes.forEach (botao => {
        botao.addEventListener("mouseenter", () => {
            botao.style.transform = "scale(1.1)";
            botao.style.boxShadow = "0 0 10px rgba(255,0,0,0.6)";
            botao.style.transition ="all 0.3s ease";
        });

        botao.addEventListener("mouseleave", () => {
            botao.style.transform = "scale(1)";
            botao.style.boxShadow ="none";
        });
    });

});

    function clickMenu() {
        if (itens.style.display == 'block') {
        itens.style.display = 'none'
        } else {
        itens.style.display = 'block'
        }
    }

    function mudouTamanho() {
        if (window.innerWidth >=768) {
            itens.style.display ='block'
        } else {
            itens.style.display ='none'
        }
    }