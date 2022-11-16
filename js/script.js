let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance:'40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text', {delay:300, origin:'left'})
sr.reveal('.about, .services, .portfolio, .blog, .contact,.copyright',{delay:100, origin:'bottom'})
/*Langues */
/*Français */
$(function() {
    $(".fr").click(function(){
        $("#menu-icon").children().eq(0).text("Acceuil");
        $("#menu-icon").children().eq(1).text("À propos de moi");
        $("#menu-icon").children().eq(2).text("Services");
        $("#menu-icon").children().eq(3).text("Portfolio");
        $("#menu-icon").children().eq(4).text("Blog");
        $("#menu-icon").children().eq(5).text("Contact");
        $(".language-selected").text("Français");
        $(".language-selected").removeClass(".change-fr");
        $(".language-selected").addClass(".change-fr");
        
        /* Section accueil*/
        $(".home-text").text("Développeur Web");
        $(".home-text").text("France/ Côte d'Azur");
        $(".btn").text("Savoir plus");
    });
});

/* Português*/
$(function() {
    $(".pt").click(function(){
        $(".navlist").children().eq(0).text("Inicio");
        $(".navlist").children().eq(1).text("Sobre mim");
        $(".navlist").children().eq(2).text("Serviços");
        $(".navlist").children().eq(3).text("Portóflio");
        $(".navlist").children().eq(4).text("Blog");
        $(".navlist").children().eq(5).text("Contacto");
        $(".language-selected").text("Português");
        $(".language-selected").removeClass("change-pt");
        $(".language-selected").addClass("change-pt");
        /* Section accueil*/
        $(".home-text").text("Développeur Web");
        $(".home-text").text("França/ Riviera Francesa");
        $(".btn").text("Saiba mais");

        /* Sobre mim*/
        $(".about-text").text("Sobre Mim");
    });
});