
const privacyModal = document.getElementById('modal-privacy');
const aboutModal = document.getElementById('modal-about');
const privacyLink = document.getElementById('privacy-link');
const aboutLink = document.getElementById('about-link');
const closeButtons = document.getElementsByClassName('close');

function search() {
  var search = document.getElementById('search-bar').value;
  if (search.trim() !== '') {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}&udm=14`;
  }
}

// opening modals
privacyLink.onclick = function(event) {
  event.preventDefault();
  privacyModal.style.display = 'flex';
}

aboutLink.onclick = function(event) {
  event.preventDefault();
  aboutModal.style.display = 'flex';
}

// closing modals when clicking close button
for (let closeButton of closeButtons) {
  closeButton.onclick = function() {
    this.closest('.modal').style.display = 'none';;
  }
}

// closing modals when clicking outside of them
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

// form submission
document.getElementById('search-form').onsubmit = function(event) {
  event.preventDefault();
  search();
}

// key press in search bar
document.getElementById('search-bar').onkeydown = function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.search-button').click();
  }
}

// make pressing any key select the search bar
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    search();

  } else if (event.key === 'Escape') {
    event.preventDefault();
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
      modal.style.display = 'none';
    }

  } else {
    document.getElementById('search-bar').focus();
  }
});
