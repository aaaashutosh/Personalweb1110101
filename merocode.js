document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");

    // Show the "Back to Top" button when scrolling down
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // Scroll to the top when the "Back to Top" button is clicked
    backToTopButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });