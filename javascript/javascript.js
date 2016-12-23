$(document).ready(function(){
  $('.nav-bar').mouseover(function(){
    $(this).addClass("hover-border");
  });
  $('.nav-bar').mouseout(function(){
    $(this).removeClass("hover-border");
  });

});
