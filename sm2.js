// wxnnvs' code here

async function apply() {
    let settingsData = get_config();

    console.log(settingsData)
    var defaultPage = settingsData.defaultPage;

    if (defaultPage == undefined) {
        settingsData = get_config()
        settingsData.defaultPage = "/"
        defaultPage = "/"
        set_config(settingsData)
    }
}

function store() {
    let previousData = get_config();
    let settingsData = {};
    const defaultPage = document.getElementById("defaultPage").value;
    settingsData.defaultPage = defaultPage;
    console.log(settingsData)
    apply();
}

function load() {
    let settingsData = JSON.parse(window.localStorage.getItem("settingsdata"));
    const defaultPage = document.getElementById("defaultPage");
    defaultPage.value = settingsData.defaultPage;
}

popup = document.getElementById("searchMenu");
if (popup != null) {
  popup.addEventListener("change", store)
  search_button = document.querySelector('.js-btn-search')
  search_button.innerText = "Settings"
  search_button.addEventListener("click", function () {

    const popup_settings = document.getElementById("searchMenu");
    popup_settings.innerHTML = popupsettingHTML
    document.getElementById('backgroundfilebutton').addEventListener("click", openFileSelector)
    load()
  });
}

// Load default page
var firstLoad = localStorage.getItem("first_load");
var defaultPage = get_config().defaultPage;

if (window.location.href.includes("login")) {
    localStorage.setItem("first_load", 0);
} else if (firstLoad == "0") {
    if (defaultPage != "/" && defaultPage != "" && defaultPage != null) {
        window.location.href = defaultPage;
        localStorage.setItem("first_load", 1);
    }
}