$(document).ready(function(){
  $('.nav-bar').mouseover(function(){
    if ($(this).hasClass('current-page') == true) {
    } else {
      $(this).addClass("hover-border");
    }
    // look up possible method hasClass? to see if we can check if self has class of 'current-page' instead
  });
  $('.nav-bar').mouseout(function(){
    $(this).removeClass("hover-border");
  });
  $('.email').mouseover(function() {
    $(this).addClass("hover-border");
  });
  $('.email').mouseout(function() {
    $(this).removeClass("hover-border");
  });

  $('.top_arrow').on('click', function() {
    window.location.href = '#about-section-container'
  });
  $('.middle_arrow').on('click', function() {
    window.location.href = '#skills-container'
  });
});

var page = window.location.href.split("/")[7]; // after the slash at the end of the domain name

$('header').ready(function() {
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



if (page === "index.html") {
  var arrow = (document).getElementsByClassName('arrow')[0],
      pfx = ["webkit", "moz", "MS", "o", ""],
      hovered = false;
  function AnimationListener() {
      if(hovered)
      {
        console.log('hovered');
        // arrow.classList.remove('animated');
        // arrow.style.webkitTransform = 'scale(1.5)';
        // arrow.style.MozTransform = 'scale(1.5)';
        // arrow.style.msTransform = 'scale(1.5)';
        // arrow.style.OTransform = 'scale(1.5)';
        // arrow.style.transform = 'scale(1.5)';
      }
  }

  function TransitionListener() {
    if(!hovered)
      {
        arrow.classList.add('animated');
      }
  }

  function PrefixedEvent(element, type, callback) {
      for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p]+type, callback, false);
      }
  }

  PrefixedEvent(arrow, "AnimationIteration", AnimationListener);

  arrow.onmouseover = function() {
    hovered = true;
  }
  arrow.onmouseout = function() {
    setTimeout(function() { hovered = false; }, 500);
    PrefixedEvent(arrow, "TransitionEnd", TransitionListener);
    arrow.style.webkitTransform = 'scale(1)';
    arrow.style.MozTransform = 'scale(1)';
    arrow.style.msTransform = 'scale(1)';
    arrow.style.OTransform = 'scale(1)';
    arrow.style.transform = 'scale(1)';
  }
}
