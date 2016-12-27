$(document).ready(function(){
  $('.nav-bar').mouseover(function(){
    $(this).addClass("hover-border");
  });
  $('.nav-bar').mouseout(function(){
    $(this).removeClass("hover-border");
  });

});

$('header').ready(function() {
  var page = window.location.href.split("/")[7]; // after the slash at the end of the domain name
  if (page === "index.html")
    $(".index").addClass("current-page");
  else if (page === "portfolio.html")
    $(".portfolio").addClass("current-page");
  else if (page === "resume.html")
    $(".resume").addClass("current-page");
  else if (page === "about.html")
    $(".about").addClass("current-page");
  else
    $(".contact").addClass("current-page");
});
