var tog = document.querySelector(".tog");
var darkMode = localStorage.getItem("darkMode") === "true";
tog.checked = darkMode;
if(darkMode) darkEnable();

tog.addEventListener("change", (e) => {
  if (tog.checked) {
    darkEnable();
  } else {
    darkDisable();
  }
});
function darkEnable() {
  localStorage.setItem("darkMode", true);
}
function darkDisable() {
  localStorage.setItem("darkMode", false);
}