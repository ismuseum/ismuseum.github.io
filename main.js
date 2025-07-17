
$(document).ready(function() {
  // Expand menu when clicking hamburger icon.
  $('.menu-btn').click(function() {
    $('.menu-list').toggleClass("show");
  });

  // Open external links in new tab.
  $('a[href^="http"]').attr('target','_blank').attr('rel','noopener noreferrer');

  // Adjust display for fixed header height.
  $('a[href*="#"]:not([href="#"])').click(function() {
    $('.menu-list').removeClass('show');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var headerHeight = 0;
        // Get fixed header height
        if (window.matchMedia('(max-width: 768px)').matches) {
          headerHeight = $('#fixed-header').height();  // When the screen width is 768px or less
        } else {
          headerHeight = $('#fixed-header').height() + $('.menu-list').height();  // When the screen width is greater
        }
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 400); // Adjust scroll position by subtracting headerHeight
        return false;
      }
    }
  });

});
