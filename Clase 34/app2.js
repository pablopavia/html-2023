$('.circulo').click(function () {
  console.log('click en el circulo');
});

$('body').mousemove(function (evento) {
  // evento -> Vamos a tener mas inforamcion sobre el evento que se acaba de producir
  // evento.pageX -> los pixeles en X donde esta el raton
  // evento.pageY -> los pixeles en y donde esta el raton
  console.log('muevo el raton dentro del BODY');

  console.log('X:', evento.pageX);
  console.log('Y:', evento.pageY);

  // Voy a acceder a circulo y le voy a cambiar la posicion
  // Estoy poniendo el valor de evento.pageX + 'px' porque en CSS necesito escribir algo parecido a '145px' algo como x con px

  $('.circulo').css({
    top: evento.pageY - 50 + 'px',
    left: evento.pageX - 50 + 'px'
  });
});
