$('.menu-circle').click(function () {
  console.log('click en el menu');
  $('.menu-desplegable').removeClass('blocked');
  $('.menu-desplegable').addClass('activo');
  $('menu-desplegable').addClass('animation-menu');
});

$('.image1').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable').removeClass('blocked');
  $('.imagen-desplegable').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable').removeClass('activo');
  $('.imagen-desplegable').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable').removeClass('activo');
  $('.imagen-desplegable').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});
