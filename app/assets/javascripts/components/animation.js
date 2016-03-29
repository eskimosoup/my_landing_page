function animateIn() {
  var $elem = $(this);
  var animationType  = $elem.data('animation-type');
  var animationDelay = $elem.data('animation-delay');

  if( animationDelay !== undefined )  {
    setTimeout(function() {
      $elem.removeClass('visibility-hidden').addClass('animated ' + animationType);
    }, animationDelay);
  } else {
    $elem.removeClass('visibility-hidden').addClass('animated ' + animationType);
  }
}

function animateOut() {
  var $elem = $(this);
  var animationType = $elem.data('animation-type');
  $elem.removeClass('animated ' + animationType).addClass('visibility-hidden');
}

if (Modernizr.mq('only screen and (min-width: 768px)') && !$('html').hasClass('ie9')) {
  $(function() {
    $('[data-animation-type]').addClass('visibility-hidden');

    $('[data-animation-type]').onScreen({
      tolerance: 0,
      toggleClass: 'onScreen',
      doIn: animateIn,
      doOut: animateOut
    });
  });

  // http://stackoverflow.com/questions/21182535/animate-css-in-hover
  $(document).on('mouseover', '.css-animated-hover', function() {
    var animateClass = $(this).data('class');
    $(this).addClass('animated ' + animateClass);
  });

  $(".css-animated-hover").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
    var animateClass = $(this).data('class');
    $(this).removeClass('animated ' + animateClass);
  });
}
