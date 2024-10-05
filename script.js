let searchBar = document.getElementById("search-bar")

searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = document.getElementById('q')
    if (inputs.value === "") {
        alert ("PLease enter something")
    }
    else {
        window.location.href = "https://google.com/search?q=" + inputs.value;
    }
})