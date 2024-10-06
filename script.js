let searchBar = document.getElementById("search-bar") //searchBar goes into my html document and finds an id called "search-bar"

searchBar.addEventListener("submit", (event) => { //addEventListener is looking for a command, in this case a click or "submit" or "enter"
    event.preventDefault(); //this will stop the form from doing what it normally does
    const googleq = document.getElementById('q') //googleq goes into my document and finds an id called q, its q becasue google search starts with q
    if (googleq.value === "") { //if you search null then it gives you an alert
        alert ("Please type something")
    }
    else { //it'll send you to the url + whatever the user searches... it'll send you to the page the user searches
        window.location.href = "https://google.com/search?q=" + googleq.value;
    }
})