

//MENU DESPLEGABLE


$('.menu-circle').click(function () {
  console.log('click en el menu');
  $('.menu-desplegable').removeClass('blocked');
  $('.menu-desplegable').addClass('activo');
  $('menu-desplegable').addClass('animation-menu');
  $('.transparent-box').removeClass('blocked');
 
});

// CLICK EN IMAGE RAYO

$('.image1').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable1').removeClass('blocked');
  $('.imagen-desplegable1').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('body').addClass('hidden');

});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable1').removeClass('activo');
  $('.imagen-desplegable1').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
});

$('.cross-flex').click(function () {
  console.log('click en cross')
  $('.imagen-desplegable1').removeClass('activo');
  $('.imagen-desplegable1').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable1') .addClass('close-an')
});

// CLICK EN IMAGE TRON

$('.image2').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable2').removeClass('blocked');
  $('.imagen-desplegable2').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('body').addClass('hidden');
  $('.imagen-desplegable2')
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable2').removeClass('activo');
  $('.imagen-desplegable2').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable2').removeClass('activo');
  $('.imagen-desplegable2').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable2')
});

// IMAGEN COORDENADAS POLARES
$('.image3').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable3').removeClass('blocked');
  $('.imagen-desplegable3').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('body').addClass('hidden');
  $('.imagen-desplegable3')
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable3').removeClass('activo');
  $('.imagen-desplegable3').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable3').removeClass('activo');
  $('.imagen-desplegable3').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable3')
});

// IMAGEN DISPERSION
$('.image4').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable4').removeClass('blocked');
  $('.imagen-desplegable4').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('.body').addClass('hidden');
  $('.imagen-desplegable4')
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable4').removeClass('activo');
  $('.imagen-desplegable4').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable4').removeClass('activo');
  $('.imagen-desplegable4').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable4')
});

// IMAGEN MOLOKO

$('.image5').click(function () {
  console.log('click en imagen');
  $('.imagen-desplegable5').removeClass('blocked');
  $('.imagen-desplegable5').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('body').addClass('hidden');
  $('.imagen-desplegable5')
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable5').removeClass('activo');
  $('.imagen-desplegable5').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable5').removeClass('activo');
  $('.imagen-desplegable5').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable5')
});

// IMAGEN APPLEAD

$('.image6').click(function () {
  console.log('click en imagen');
  $('.imagen-6').removeClass('blocked');
  $('.imagen-desplegable6').addClass('activo');
  $('.transparent-box').removeClass('blocked');
  $('.transparent-box').addClass('activo');
  $('body').addClass('hidden');
  $('.imagen-desplegable6')
});

$('.transparent-box').click(function () {
  console.log('click fuera de la imagen');
  $('.imagen-desplegable6').removeClass('activo');
  $('.imagen-desplegable6').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('.who-popup').addClass('blocked');
  $('body').removeClass('hidden');
  $('.welcome-box').removeClass('blocked');
  $('.glass-container').removeClass('blocked');
  $('.small-desc').removeClass('blocked');
  $('.quote').removeClass('blocked');
});

$('.cross-flex').click(function () {
  $('.imagen-desplegable6').removeClass('activo');
  $('.imagen-desplegable6').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('body').removeClass('hidden');
  $('.imagen-desplegable6')
 


  //- > CERRAR -> Quitar la case blocked
});

// POPUP  -  WHO AM I

$('.who-box').click(function () {
  console.log('click a caja who am i');
  $('.who-popup').removeClass('blocked');

$('.welcome-box').addClass('blocked');
$('.glass-container').addClass('blocked');
$('.small-desc').addClass('blocked');
  $('.transparent-box').removeClass('blocked');
  $('.quote').addClass('blocked');

});

$('.cross').click(function () {
  $('.who-popup').addClass('blocked');
  $('.transparent-box').addClass('blocked');
  $('.transparent-box').removeClass('activo');
  $('.welcome-box').removeClass('blocked');
$('.glass-container').removeClass('blocked');
$('.small-desc').removeClass('blocked');
$('.quote').removeClass('blocked');

});

// HOME CLICK FOR WORKS
function scrollToSection() {
  var section = document.getElementById("html-box");
  section.scrollIntoView();
}










