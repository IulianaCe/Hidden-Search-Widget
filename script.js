const searchIcon = document.getElementById('searchIcon');
    const searchWidget = document.getElementById('searchWidget');

    searchIcon.addEventListener('click', () => {
      searchWidget.classList.toggle('active');
    });