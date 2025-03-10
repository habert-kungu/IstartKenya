// Load navbar into #navbar
fetch("/components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // After navbar is loaded, initialize mobile menu functionality
    initializeMobileMenu();
  })
  .catch((error) => console.error("Error loading navbar:", error));

// Load footer into #footer
fetch("/components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));

// Function to initialize mobile menu
function initializeMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  // Check if all elements exist
  if (!menuBtn || !closeMenu || !mobileMenu || !menuOverlay) {
    console.error("One or more menu elements not found:", {
      menuBtn,
      closeMenu,
      mobileMenu,
      menuOverlay,
    });
    return;
  }

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  menuBtn.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);
}
