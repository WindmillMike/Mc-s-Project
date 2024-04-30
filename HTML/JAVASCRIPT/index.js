window.addEventListener('scroll', function() {
  
      var Logo = document.getElementById('logoWrapper');
      var menuButton = document.getElementById('menuButton');
      var searchButton = document.getElementById('searchButton');
      var searchIcon = document.getElementById('searchIcon');
  
      if (window.scrollY > 1) {
        Logo.classList.remove('decenter');
        Logo.classList.add('center');
        menuButton.classList.remove('dissappear');
        menuButton.classList.add('appear');
        searchButton.classList.remove('dissappear');
        searchButton.classList.add('appear');
        searchIcon.classList.remove('dissappear');
        searchIcon.classList.add('appear');
      } else {
        Logo.classList.remove('center'); 
        Logo.classList.add('decenter'); 
        menuButton.classList.remove('appear');
        menuButton.classList.add('dissappear');
        searchButton.classList.remove('appear');
        searchButton.classList.add('dissappear');
        searchIcon.classList.remove('appear');
        searchIcon.classList.add('dissappear');
      }
   
  });

  var menuWrapper = document.getElementById('menuWrapper');
  var menuParts = document.getElementById('menuParts');
  
  document.getElementById("menuButton").addEventListener("click", function() {
    menuWrapper.classList.remove('close');
    menuParts.classList.remove('close');
    menuWrapper.classList.add('open');
    menuParts.classList.add('open');
  });

  document.getElementById("closeButton").addEventListener("click", function() {
    menuWrapper.classList.remove('open');
    menuParts.classList.remove('open');
    menuWrapper.classList.add('close');
    menuParts.classList.add('close');
  });