function App() {}

//ESTE EVENTO , CARGA TODO EL SCRIPT UNA VEZ UQ SE HALLA CARGADO TODA AL PAGINA
window.onload = function (event) {
    var app = new App();
    window.app = app;
};


App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;// capturo el elemento que escucha el evento.
    const slickList = event.currentTarget.parentNode;//capturo el elemento padre del "currentTarget"
    const track = event.currentTarget.parentNode.querySelector('#track'); //aca capturamos al carrusell completo
    const slick = track.querySelectorAll('.slick'); //aca campturamos cada elementos del carrusel


    //veo que dimensiones tienen el carrusel y los elementos del carrusel
    const slickWidth = slick[0].offsetWidth;//aca capturo el ancho visible de cada elemento del carrusel
    const trackWidth = track.offsetWidth;//aca capturo el ancho visible de todo el carrusel
    const listWidth = slickList.offsetWidth;//aca capturo el ancho visible de todo la pagina

    //MODIFICO EL EVENTO: GUARDO EL NUEVO ESTADO - TOMO EL ESTILO DEL BOTON "PREV"
    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    //PREV: MUEVO A LA DERECHA / BOTON < / POSICION DEL BOTON = IZQUIERDA
    //NEXT: MUEVO A LA IZQUIERDA / BOTON > / POSICION DEL BOTON = DERECHA

    //MODIFICO EL EVENTO: GUARDO EL NUEVO ESTADO - SI EL EVENTO ES SELECCIONO PREV ENTONCES MUEVO A LA DERECHA, Y SIN NO, VOY A LA IZQUIERDA
    btn.dataset.button == "button-prev" ?   prevAction(leftPosition,slickWidth,track) : 
                                            nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

//FUNCION QUE HECE MOVER UN LUGAR HACIA LA DERECHA -->
let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

//FUNCION QUE HACE MOVER UN LUGAR HACIA LA IZQUIERDA <--
let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
