// wxnnvs' code here


// Load default page
var firstLoad = localStorage.getItem("first_load");
var defaultPage = get_config().defaultPage;

if (window.location.href.includes("login")) {
    localStorage.setItem("first_load", 0);
} else if (firstLoad == "0") {
    if (defaultPage != "/") {
        window.location.href = defaultPage;
        localStorage.setItem("first_load", 1);
    }
}