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
  var grid;

  // Methods
  function initGallery() {
    grid = gallery.isotope({
      itemSelector: galleryItemSelector,
    });

    grid.imagesLoaded().progress(function () {
      grid.isotope("layout");
    });
  }

  // Init menu
  initGallery();
})();
