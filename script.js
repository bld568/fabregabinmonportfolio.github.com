const boutonMenu = document.getElementById("menu-mobile");
const navigation = document.getElementById("liens-navigation");
boutonMenu.addEventListener("click", function () {
  const ouvert = navigation.classList.toggle("ouvert");
  boutonMenu.setAttribute("aria-expanded", ouvert);
});
navigation.querySelectorAll("a").forEach(function (lien) {
  lien.addEventListener("click", function () {
    navigation.classList.remove("ouvert");
    boutonMenu.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("annee").textContent = new Date().getFullYear();
