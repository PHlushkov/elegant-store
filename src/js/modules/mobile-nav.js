function mobileNav() {
  // Mobile nav button

  const navBtnClose = document.querySelector("#close-mobile-nav");
  const navBtnOpen = document.querySelector("#mobile-nav-btn");
  const mobileNavFade = document.querySelector(".mobile-fade");
  const nav = document.querySelector(".mobile-nav");

  navBtnOpen.onclick = function () {
    nav.classList.add("mobile-nav--open");
    mobileNavFade.classList.add("mobile-fade--open");
    document.body.classList.toggle("no-scroll");
  };

  navBtnClose.onclick = function () {
    nav.classList.remove("mobile-nav--open");
    mobileNavFade.classList.remove("mobile-fade--open");
    document.body.classList.toggle("no-scroll");
  };

  mobileNavFade.onclick = function () {
    nav.classList.remove("mobile-nav--open");
    mobileNavFade.classList.remove("mobile-fade--open");
    document.body.classList.toggle("no-scroll");
  };

  nav.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

export default mobileNav;
