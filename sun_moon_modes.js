// !!!!!!!! SELECT ITEMS !!!!!!!!
const sunMoonContainer = document.getElementById("sun-moon-container");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// !!!!!!!! EVENT LISTENERS !!!!!!!!
// *** switch sun or moon mode
sunMoonContainer.addEventListener("click", () => {
  let isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    // *** save data to localStorage
    localStorage.setItem("darkModeFlag", JSON.stringify(false));
  } else {
    document.body.classList.add("dark-mode");
    // *** save data to localStorage
    localStorage.setItem("darkModeFlag", JSON.stringify(true));
  }

  if (moon.style.display !== "block") {
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    sun.style.display = "block";
    moon.style.display = "none";
  }
});

window.addEventListener("DOMContentLoaded", modeInit);

// !!!!!!!! FUNCTION !!!!!!!!
// *** initialize sun or moon mode based on the user's last choice,
// *** also keep the same mode when the user enters other web pages
function modeInit() {
  // *** read data from localStorage
  let darkModeFlag = JSON.parse(localStorage.getItem("darkModeFlag"));

  if (darkModeFlag) {
    document.body.classList.add("dark-mode");
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    document.body.classList.remove("dark-mode");
    sun.style.display = "block";
    moon.style.display = "none";
  }
}
