
const bar = document.getElementById("search-bar");

function search() {
    const searchTerm = document.getElementById("search-bar").value;
    if (searchTerm === "") {
        document.getElementById("message").innerHTML = "Please enter a search term!";
        return;
    }
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const googleUrl = "https://www.google.com/search?q=" + encodedSearchTerm + "&udm=14";
    window.location.href = googleUrl;
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        search();
    } else {
        bar.focus();
    }
});

document.getElementById("search-form").addEventListener("submit", function(event) {
    if (navigator.onLine) {
        event.preventDefault();
        search();
    } else {
        alert("You are offline. Please connect to the internet to search.");
    }
});