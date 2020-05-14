window.onscroll = function () {
  navbarDark();
};

function navbarDark() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("navbarDark");
  } else {
    document.getElementById("navbar").classList.remove("navbarDark");
  }
}

var gallery = (function () {
  // Variables
  var gallery = $(".gallery__grid");
  var galleryItemSelector = ".gallery__item";
  // Methods
  function initGallery() {
    document.ready(
      gallery.isotope({
        itemSelector: galleryItemSelector,
      })
    );
  }
  // Init menu
  initGallery();
})();

/*** Button to top page ***/

var toTopButton = (function () {
  // Variables
  var topButton = $("#back-to-top");
  var scrollTop = $(window).scrollTop();
  var isActive = false;
  if (scrollTop > 100) {
    isActive = true;
  }

  // Methods

  // Events
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > 100 && !isActive) {
      isActive = true;
      topButton.fadeIn();
    } else if (scrollTop <= 100 && isActive) {
      isActive = false;
      topButton.fadeOut();
    }
  });
})();
