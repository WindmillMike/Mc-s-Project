window.addEventListener('scroll', function() {

      var Logo = document.getElementById('Logo');
      var logoWrapper = document.getElementById('logoWrapper');
      var menuButton = document.getElementById('menuButton');
      var searchButton = document.getElementById('searchButton');
      var searchIcon = document.getElementById('searchIcon');
  
      if (window.scrollY > 1) {
        logoWrapper.classList.remove('decenter');
        logoWrapper.classList.add('center');
        Logo.classList.add('center');
        menuButton.classList.remove('dissappear');
        menuButton.classList.add('appear');
        searchButton.classList.remove('dissappear');
        searchButton.classList.add('appear');
        searchIcon.classList.remove('dissappear');
        searchIcon.classList.add('appear');
      } else {
        logoWrapper.classList.remove('center'); 
        logoWrapper.classList.add('decenter'); 
        Logo.classList.remove('center'); 
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
  var Transparent = document.getElementById('Transparent');
  var headerWrapper = document.getElementById('headerWrapper');
  var Body = document.getElementById('Body');
  
  document.getElementById("menuButton").addEventListener("click", function() {
    menuWrapper.classList.remove('close');
    menuParts.classList.remove('close');
    menuWrapper.classList.add('open');
    menuParts.classList.add('open');
    Transparent.classList.remove('close');
    Transparent.classList.add('open');
    headerWrapper.classList.remove('close');
    headerWrapper.classList.add('open');
    Body.classList.remove('Move');
    Body.classList.add('noMove');
  });

  document.getElementById("closeButton").addEventListener("click", function() {
    menuWrapper.classList.remove('open');
    menuParts.classList.remove('open');
    menuWrapper.classList.add('close');
    menuParts.classList.add('close');
    Transparent.classList.remove('open');
    Transparent.classList.add('close');
    headerWrapper.classList.remove('open');
    headerWrapper.classList.add('close');
    Body.classList.remove('noMove');
    Body.classList.add('Move');
  });
