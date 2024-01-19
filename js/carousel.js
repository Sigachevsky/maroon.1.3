$(document).ready(function(){
  $(".card-container").swipe( {
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      $(this).animate( { scrollLeft: "+=200px" }, "fast");
    },
    swipeRight: function(event, direction, distance, duration, fingerCount) {
      $(this).animate( { scrollLeft: "-=200px" }, "fast");
    }
  });

  var isScrolling = false;
  $(".card-container").on("mousewheel", function(event) {
    event.preventDefault();
    if (!isScrolling) {
      isScrolling = true;
      var scrollDistance = 260;
      var animationDuration = 400; // уменьшаем продолжительность анимации для увеличения скорости
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $(this).animate({ scrollLeft: $(this).scrollLeft() - scrollDistance }, animationDuration, function() {
          isScrolling = false;
        });
      } else {
        $(this).animate({ scrollLeft: $(this).scrollLeft() + scrollDistance }, animationDuration, function() {
          isScrolling = false;
        });
      }
    }
  });
});