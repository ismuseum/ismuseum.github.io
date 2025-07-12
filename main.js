
$(document).ready(function() {
  $('.menu-btn').click(function() {
    $('.menu-list').toggleClass("show");
  });

  // Optional: Close menu when clicking outside
  $(document).click(function(e) {
    if (!$(e.target).closest('.menu-btn, .menu-list').length) {
      $('.menu-list').removeClass('show');
    }
  });
});
