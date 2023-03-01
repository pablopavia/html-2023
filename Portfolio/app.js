$('.menu-circle').click(function () {
  console.log('click en el menu');
  $('.menu-desplegable').removeClass('blocked');
  $('.menu-desplegable').addClass('activo');
  $('menu-desplegable').addClass('animation-menu');
});

// Hide the loader and show the main content when the page is fully loaded
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  var main = document.getElementById('main');
  loader.style.display = 'none';
  main.style.display = 'block';
});
