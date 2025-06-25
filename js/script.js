// Toggle mobile nav
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
  
    // Optional: Hide menu when clicking outside it
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        if (window.innerWidth <= 768) {
          navMenu.style.display = "none";
        }
      }
    });
  });
  
  // Lightbox for profile image
const modal = document.getElementById("imgModal");
const img = document.getElementById("profileImage");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
