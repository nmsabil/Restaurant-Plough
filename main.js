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
