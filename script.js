function startAnimation() {
  const overlay = document.getElementById("fullscreen-overlay");
  const fadeText = document.getElementById("fade-text");

  // Reset animations
  overlay.style.animation = "none";
  fadeText.style.animation = "none";
  void overlay.offsetWidth; // Trigger reflow
  void fadeText.offsetWidth;

  // Display overlay and text
  overlay.style.display = "flex";

  // Fade in for 5 seconds
  overlay.style.animation = "fadeIn 5s forwards";
  fadeText.style.animation = "fadeIn 5s forwards";

  // Start fade-out after 5 seconds
  setTimeout(() => {
    overlay.style.animation = "fadeOut 3s forwards";
    fadeText.style.animation = "fadeOut 3s forwards";
  }, 5000);

  // Hide overlay completely after fade-out (8 seconds total)
  setTimeout(() => {
    overlay.style.display = "none";
  }, 8000);
}
