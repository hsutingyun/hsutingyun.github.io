window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let backgroundSection = document.querySelector('.background-section');

  backgroundSection.style.backgroundPosition = `center ${scrollPosition * 0.1}px`;

  if (scrollPosition > 550) {
      backgroundSection.classList.add('sticky'); 
      backgroundSection.style.backgroundImage = "url('Webaw3_picture/p25.PNG')";
      backgroundSection.style.backgroundPosition = "center top 50%"; 
  } else {
      backgroundSection.classList.remove('sticky'); 
      backgroundSection.style.backgroundImage = "url('Webaw3_picture/p25.PNG')";
  }
});







