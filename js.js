window.addEventListener("load",function(){
    new Glider(this.document.querySelector(".carousel_lista"), {
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: {
            prev: '.carousel_izquierdo',
            next: '.carousel_derecho'
                }  
    });
});

window.addEventListener("load",function(){
    new Glider(this.document.querySelector(".carousel_lista0"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.carousel_izquierdo',
            next: '.carousel_derecho'
                }  
    });
});

var splide = new Splide( 'splide', {
    direction: 'ttb',
    height   : '10rem',
    } );

    splide.mount();
