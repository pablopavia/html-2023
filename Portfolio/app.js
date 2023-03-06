$('.menu-circle').click(function () {
  console.log('click en el menu');
  $('.menu-desplegable').removeClass('blocked');
  $('.menu-desplegable').addClass('activo');
  $('menu-desplegable').addClass('animation-menu');
});

// CLICK EN IMAGE RAYO

$('.image1').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable1').removeClass('blocked');
  $('.imagen-desplegable1').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable1').removeClass('activo');
  $('.imagen-desplegable1').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable1').removeClass('activo');
  $('.imagen-desplegable1').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

// CLICK EN IMAGE TRON

$('.image2').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable2').removeClass('blocked');
  $('.imagen-desplegable2').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable2').removeClass('activo');
  $('.imagen-desplegable2').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable2').removeClass('activo');
  $('.imagen-desplegable2').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

// IMAGEN COORDENADAS POLARES
$('.image3').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable3').removeClass('blocked');
  $('.imagen-desplegable3').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable3').removeClass('activo');
  $('.imagen-desplegable3').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable3').removeClass('activo');
  $('.imagen-desplegable3').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

// IMAGEN DISPERSION
$('.image4').click(function () {
  console.log('click en imagen');
  $('.imagen-4').removeClass('blocked');
  $('.imagen-desplegable4').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable4').removeClass('activo');
  $('.imagen-desplegable4').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable4').removeClass('activo');
  $('.imagen-desplegable4').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

// IMAGEN MOLOKO

$('.image5').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable5').removeClass('blocked');
  $('.imagen-desplegable5').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable5').removeClass('activo');
  $('.imagen-desplegable5').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable5').removeClass('activo');
  $('.imagen-desplegable5').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
});
