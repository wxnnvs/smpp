// wxnnvs' code here

var firstLoad = localStorage.getItem("first_load");

if (window.location.href.includes("login")) {
  localStorage.setItem("first_load", 0);
} else if (firstLoad == "0") {
    window.location.href = get_config().defaultPage; 
    localStorage.setItem("first_load", 1);
} else if (firstLoad == "1") {
    // nothing
}