const toggle = document.getElementById("toggle");
let changed = document.getElementById("changed");
let changedSec3 = document.querySelector(".contents__tools");
let navbar = document.getElementById("mobile-menu-4");
let mentoring = document.querySelector('.content--mentoring img');
let rutin = document.querySelector('.content--rutin img');
let bisnis = document.querySelector('.content--bisnis img');
let digital = document.querySelector('.content--digital img');
let rewards = document.querySelector('.content--rewards img');
let skincare = document.querySelector('.content--skincare img');
let knowledge = document.querySelector('.content--knowledge img');
let profile = document.querySelector('.content--profile img');

toggle.addEventListener("click", function () {
  navbar.classList.toggle("block");
  navbar.classList.toggle("hidden");
});
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) return changed.src = "./assets/pixel-pc.png";
  if (!e.matches) return changed.src = "./assets/pixel-mobile.png";
  if (e.matches) return mentoring.src = "./assets/icon-mentoring-md.png";
  if (!e.matches) return mentoring.src = "./assets/icon-mentoring.png";

}

function TabletSection4(e) {
  // Check if the media query is true
  if (e.matches) {
    mentoring.src = "./assets/icon-mentoring-md.png";
    rutin.src = "./assets/icon-kajian-md.png";
    bisnis.src = "./assets/icon-bisnis-md.png";
    digital.src = "./assets/icon-digital-class-md.png";
    rewards.src = "./assets/icon-rewards-md.png";
    skincare.src = "./assets/icon-ckincare-class-md.png";
    knowledge.src = "./assets/icon-product-knowledge-md.png";
    profile.src = "./assets/icon-free-web-md.png";
  } else {
    mentoring.src = "./assets/icon-mentoring.png";
    rutin.src = "./assets/icon-kajian.png";
    bisnis.src = "./assets/icon-bisnis.png";
    digital.src = "./assets/icon-digital-class.png";
    rewards.src = "./assets/icon-rewards.png";
    skincare.src = "./assets/icon-ckincare-class.png";
    knowledge.src = "./assets/icon-product-knowledge.png";
    profile.src = "./assets/icon-free-web.png";
  }

}
// Register event listener
mediaQuery.addListener(handleTabletChange);
mediaQuery.addListener(TabletSection4);

// Initial check
handleTabletChange(mediaQuery);
TabletSection4(mediaQuery);

function callback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const removeBlur = document.getElementById('blured');
      removeBlur.classList.remove('blur-lg')
    }
  })
}

const options = {
  threeshold: 1.0
}

let observer = new IntersectionObserver(callback, options)

observer.observe(document.querySelector('.target'))
