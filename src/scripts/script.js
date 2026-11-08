$(document).ready(function(){
  $('#top-menu li').click(function(){
    $('#top-menu li').removeClass('active');
    $(this).addClass('active');
  })
});
