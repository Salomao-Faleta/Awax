window.sr = ScrollReveal({reset: true});

//do main
sr.reveal('h1', {
    duration: 2000,
    rotate: {x: 0, y: 80, z: 0},
    delay: 250
});

//do main
sr.reveal('h2',{
    duration: 2000,
    rotate: {x: 0, y: 80, z: 0},
    delay: 250
})

//dona de cada área em branco
sr.reveal('.default.light',{
    duration: 1500,
    delay: 300
});

//dona de cada área em preto
sr.reveal('.default.dark',{
    duration: 1500,
    delay: 300
})

//responsável pelo mapa
sr.reveal('.section-map',{
    duration: 1500,
    delay: 250
})
