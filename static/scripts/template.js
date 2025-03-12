document.getElementById("dropdownButtonSearch").addEventListener("click", function() {
  let menu = document.getElementById("dropdownSearch");
  menu.style.display = (menu.style.display === "block" || menu.style.display === "") ? "none" : "block";
});

document.getElementById("dropdownButtonLanguage").addEventListener("click", function() {
  let languageMenu = document.getElementById("dropdownLanguage");
  languageMenu.style.display = (languageMenu.style.display === "block" || languageMenu.style.display === "") ? "none" : "block";
});





document.addEventListener("click", function(event) {
  let menu = document.getElementById("dropdownSearch");
  let buttonSearch = document.getElementById("dropdownButton");

  let languageMenu = document.getElementById("dropdownSearch");
  let buttonLanguage = document.getElementById("dropdownButton");

  if (!menu.contains(event.target) && !buttonSearch.contains(event.target)) {
    menu.style.display = "none";
  }

  if (!menu.contains(event.target) && !buttonLanguage.contains(event.target)) {
    menu.style.display = "none";
  }
});