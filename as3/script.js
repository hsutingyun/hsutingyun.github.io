window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let backgroundSection = document.querySelector('.background-section');

  backgroundSection.style.backgroundPosition = `center ${scrollPosition * 0.2}px`;

  if (scrollPosition > 850) {
      backgroundSection.classList.add('sticky'); 
      backgroundSection.style.backgroundImage = "url('Webaw3_picture/p25.PNG')";
      backgroundSection.style.backgroundPosition = "center top"; 
  } else {
      backgroundSection.classList.remove('sticky'); 
      backgroundSection.style.backgroundImage = "url('Webaw3_picture/p02.PNG')";
  }
});







