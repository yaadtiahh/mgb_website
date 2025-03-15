document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.getElementById("dropdownButtonSearch");
  let languageButton = document.getElementById("dropdownButtonLanguage");
  let searchMenu = document.getElementById("dropdownSearch");
  let languageMenu = document.getElementById("dropdownLanguage");
  let header = document.querySelector("header");

  if (searchButton && searchMenu) {
      searchButton.addEventListener("click", function () {
          searchMenu.style.display = (searchMenu.style.display === "block") ? "none" : "block";
      });
  }

  if (languageButton && languageMenu) {
      languageButton.addEventListener("click", function () {
          languageMenu.style.display = (languageMenu.style.display === "block") ? "none" : "block";
      });
  }

  document.addEventListener("click", function (event) {
      if (searchMenu && !searchMenu.contains(event.target) && !searchButton.contains(event.target)) {
          searchMenu.style.display = "none";
      }
      if (languageMenu && !languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
          languageMenu.style.display = "none";
      }
  });

  window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      let scrollThreshold = document.body.scrollHeight * 0.2; // 30% от всей высоты страницы

      if (scrollTop > scrollThreshold) {
          header.classList.add("header-hidden");
      } else {
          header.classList.remove("header-hidden");
      }
  });
});
