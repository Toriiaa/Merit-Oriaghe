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


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      document.getElementById("head-nav").style.backgroundColor =
        "rgba(0, 0, 0,0.5)";
      document.getElementById("main").style.padding = "10px";
      document.getElementById("main-logo").style.fontSize = "30px";
    } else {
      document.getElementById("head-nav").style.backgroundColor =
        "rgb(0, 0, 0)";
      document.getElementById("main").style.padding = "20px";
      document.getElementById("main-logo").style.fontSize = "50px";
    }
  }