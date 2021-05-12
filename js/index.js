$(document).ready(function () {
    $(".my-slide").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      animateOut: "rollOut",
      animateIn: "rollIn",
      // margin:10,
      responsive: {
        0: {
          items: 1,
        },
      },
    });

    $(".surround1").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      animateOut: "rollOut",
      animateIn: "rollIn",
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });


  $(document).ready(function() {
    $(".surround2").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      animateOut: "rollOut",
      animateIn: "rollIn",
      responsive: {
        0: {
          items: 1
        }
      }
    });
  });


