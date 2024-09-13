// Function to trigger animation when a beam-block is visible
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const beam = entry.target.querySelector(".beam");
      if (beam) {
        beam.classList.add("start-animation"); // Trigger animation
      }
      observer.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
}

// Set up the Intersection Observer
const options = {
  root: null, // The viewport
  threshold: 0.1, // Trigger when 1% of the beam-block is visible
};

const observer = new IntersectionObserver(animateOnScroll, options);

// Select all beam-blocks except the first one
const beamBlocks = document.querySelectorAll(".beam-block:not(:first-child)");

// Observe each beam-block
beamBlocks.forEach((beamBlock) => {
  observer.observe(beamBlock);
});

// Trigger the first beam on page load
window.addEventListener("load", function () {
  const firstBeam = document.querySelector(".beam.first");
  if (firstBeam) {
    firstBeam.classList.add("start-animation"); // Trigger animation for the first beam
  }
});
