document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".container section");
  
    function hoverEffect() {
      this.style.backgroundImage = "url('css/smth.gif')";
      this.style.backgroundSize = "cover";
      this.style.backgroundPosition = "center";
      this.style.backgroundColor = "transparent";
    }
  
    function resetEffect() {
      this.style.backgroundImage = "";
      this.style.backgroundColor = "#f0f0f0";
    }
  
    sections.forEach(function(section) {
      section.addEventListener("mouseenter", hoverEffect);
      section.addEventListener("mouseleave", resetEffect);
    });
  
    window.addEventListener("scroll", function() {
      var navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#f1f1f1";
      } else {
        navbar.style.backgroundColor = "";
      }
    });
  });
  
  