window.addEventListener("load", function () {
  const beamElements = document.querySelectorAll(".beam"); // Select all elements with the class 'beam'

  beamElements.forEach(function (beam) {
    beam.classList.add("start-animation"); // Add the animation class to each element
  });
});
