$(function() {
  $(":root").css("--scrollbar-width", ($(window).outerWidth() - $(":root").width()).toString() + "px");
  $(document.body).prepend('<div id="zoom-background"></div>');
  $(".zoom").click(function() {
    var zoomed = $(this).hasClass("zoomed");
    $(".zoomed").removeClass("zoomed");
    if (!zoomed) {
      $(this).addClass("zoomed");
      $(":root").addClass("zoomed");
    }
  })
  $(document).click(function (event) {
    if(!$(event.target).closest('.zoom').length) {
      $(".zoomed").removeClass("zoomed");
    }
  });
})
