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
  var Parts = document.getElementById('Parts');
  var menuPart1 = document.getElementById('menuPart1');
  var menuPart2 = document.getElementById('menuPart2');
  const menuFilters = document.querySelectorAll("#menuFilters");
  
  document.getElementById("menuButton").addEventListener("click", function() {
    menuWrapper.classList.remove('close');
    menuWrapper.classList.add('open');
    Transparent.classList.remove('close');
    Transparent.classList.add('open');
    headerWrapper.classList.remove('close');
    headerWrapper.classList.add('open');
    Body.classList.remove('Move');
    Body.classList.add('noMove');
    Parts.classList.remove('hide');
    Parts.classList.add('appear');
  });

  document.getElementById("closeButton").addEventListener("click", function() {
    menuWrapper.classList.remove('open');
    menuWrapper.classList.add('close');
    Transparent.classList.remove('open');
    Transparent.classList.add('close');
    headerWrapper.classList.remove('open');
    headerWrapper.classList.add('close');
    Body.classList.remove('noMove');
    Body.classList.add('Move');
    Parts.classList.remove('appear');
    Parts.classList.add('hide');
    setTimeout(() => {
      menuPart1.classList.remove('hide');
    }, 500);
    setTimeout(() => {
      menuPart1.scrollTop = 3;
      menuPart2.scrollTop = 3;
    }, 200);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll("#menuSelector");

    for (const menuFilter of document.querySelectorAll('#menuFilters')) {
      menuFilter.addEventListener('click', function() {
        menuFilters.forEach(function(item) {
          item.classList.remove('selected');
      });
        menuPart1.classList.add('hide');
        this.classList.toggle('selected');
      });
    }

    items.forEach(item => {
        item.addEventListener("click", function() {
            const selectedFilter = document.querySelector("#menuFilters.selected");
            const brand = selectedFilter.dataset.brand;
            const clothing = item.dataset.clothing;
            const url = `https://something.com/${brand}-${clothing}`;
            window.location.href = url;
        });
    });
});

