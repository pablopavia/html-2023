// $('#btnStart').click(function () {
//   console.log('boton start clicked');
//   cuadrado_rotando = true;
//   $('.cuadrado').addClass('rotar');
// });

// $('#btnStop').click(function () {
//   console.log('boton stop clicked');

//   // Quitar la clase de cuadrado

//   $('.cuadrado').removeClass('rotar');
// });

$('.menu-button').click(function () {
  console.log('clickado el menu');
  $('.menu-desplegable').addClass('activo');
});

$('.two').click(function () {
  console.log('Clickado en cerrar menu');
  $('.menu-desplegable').removeClass('activo');
});
