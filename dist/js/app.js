const toggle = document.getElementById("toggle");
let changed = document.getElementById("changed");
let navbar = document.getElementById("mobile-menu-4");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("block");
  navbar.classList.toggle("hidden");
});
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) return changed.src = "./assets/pixel-pc.png";
  if(!e.matches) return changed.src = "./assets/pixel-mobile.png"
  
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);