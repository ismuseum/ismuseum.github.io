
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


$(document).ready(function() {
  // Expand menu when clicking hamburger icon.
  $('.menu-btn').click(function() {
    $('.menu-list').toggleClass("show");
  });
  // Expand paragraph when clicking the prompt ("Learn more.").
  $('.prompt').click(function() {
    $('.toexpand').toggleClass("show");
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


// Check the URL for a hash on page load
window.addEventListener('DOMContentLoaded', () => {
  // window.location.hash returns the string including '#', like '#my-section'
  // .substring(1) removes the '#' to get just the ID string
  const hashId = window.location.hash.substring(1);

  if (hashId) {
    // Optional timeout ensures the browser finished rendering layout
    setTimeout(() => {
      scrollToSection(hashId);
    }, 100);
  }
});
