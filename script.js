// Open photo in modal with fade-in effect
function openPhoto(src) {
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const fadeText = document.getElementById("fade-text");

  // Set the image source
  modalImg.src = src;

  // Show modal and start animation
  modal.style.display = "flex";

  // Reset animations
  modalImg.style.animation = "none";
  fadeText.style.animation = "none";
  void modalImg.offsetWidth; // Trigger reflow
  void fadeText.offsetWidth;

  // Apply animations
  modalImg.style.animation = "fadeIn 5s forwards";
  fadeText.style.animation = "showText 1s forwards";

  // Hide fade text after 1 second
  setTimeout(() => {
    fadeText.style.display = "none";
  }, 1000);
}

// Close modal on clicking anywhere outside the image
document.getElementById("photo-modal").onclick = function () {
  this.style.display = "none";
};
