$(function() {
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
  var pWidth = [0];
  var pBarWidth = [0];
  function updateScrollbarW() {
    var newWidth = $(this).outerWidth();
    if (newWidth !== pWidth[0]) {
      var newBarWidth = newWidth - $(":root").width();
      if (newBarWidth !== pBarWidth[0]) {
        $(":root").css("--scrollbar-width", newBarWidth.toString() + "px");
        pBarWidth[0] = newBarWidth;
      }
      pWidth[0] = newWidth;
    }
  }
  updateScrollbarW($(window));
  $(window).on("resize", updateScrollbarW);
})
