const popupsettingHTML = `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>popup</title>
</head>
<body>
<h3 class="popuptitles">Homepage</h3>
<div class="textandbutton">
<input class="popupinput" id="defaultPage" type="text" placeholder="ex: /?module=Agenda" style="height:35px !important;width:100% !important;font-size:16px !important;" margin:0;></input>
</div>
<h3 class="popuptitles">Color profile:</h3>
<select id="profileSelector" >
    <option value="default">Default Deluxe</option>
    <option value="white">Off White</option>
    <option value="custom">Custom Theme</option>
    <option value="ldev">Dark Sands</option>
    <option value="birb">Midnight Sapphire</option>
    <option value="stalker">Ruby Eclipse</option>
    <option value="chocolate">Dark Mocha</option>
    <option value="mountain">Storm Peaks</option>
    <option value="winter">Arctic Azure</option>
    <option value="galaxy">Fluorescent Galaxy</option>
    <option value="sand">Sahara Oasis</option>
    <option value="purple">Neon Violet</option>
    <option value="fall">Autumn Gloom</option>
    <option value="matcha">Matcha Green</option>
</select>
<div class="textandbutton" id="colorpickers">
</div>
<div class="textandbutton" style="margin-top:0px !important">
  <div>
    <h3 class="popuptitles">Planner:</h3>
    <label class="switch">
      <input class="popupinput" type="checkbox" id="showplanner">
      <span class="slider round"></span>
      </label>
  </div>
<div>
  <h3 class="popuptitles">Delijn:</h3>
  <label class="switch">
    <input class="popupinput" type="checkbox" id="halt">
    <span class="slider round"></span>
    </label>
</div>
</div>
<h3 class="popuptitles">Location (weather):</h3>
<div class="textandbutton">
<input class="popupinput" id="location" type="text"></input>
<label class="switch">
<input class="popupinput" type="checkbox" id="isbig">
<span class="slider round"></span>
</label>
</div>
<h3 class="popuptitles">Custom wallpaper (optional):</h3>
<div class="textandbutton">
  <div class="verticaltext"><p class="nobottommargp off_text">Off</p><p class="nobottommargp link_text">Link</p><p class="nobottommargp">File</p></div>
  <input type="range" min="0" max="2" value="0" class="sliderblur" id="backgroundSlider">
  <input class="popupinput" id="backgroundlink" type="text"></input>
  <input class="popupinput" class="backgroundfile" id="fileInput" style="display: none;" type="file" accept=".png, .jpg, .jpeg"></input>
  <button class="popupinput" class="backgroundfile" id="backgroundfilebutton"><svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 13H15M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z" class="st4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g>
  </svg></button>
</div>
<div class="textandbutton" id="errormessagesmpp"></div>
<h3 class="popuptitles">Blur:</h3>
<input type="range" min="0" max="20" value="0" class="sliderblur" id="mySlider">
<h3 class="popuptitles">Snow:</h3>
<input type="range" min="0" max="500" value="0" class="sliderblur" id="snowSlider">
<div class="textandbutton">
  <div>
    <h3 class="popuptitles">Snake:</h3>
    <label class="switch">
      <input class="popupinput" type="checkbox" id="showsnakeelement">
      <span class="slider round"></span>
      </label>
  </div>
  <div>
    <h3 class="popuptitles">Flappy:</h3>
    <label class="switch">
      <input class="popupinput" type="checkbox" id="showflappyelement">
      <span class="slider round"></span>
      </label>
  </div>
<div>
  <h3 class="popuptitles">News:</h3>
  <label class="switch">
    <input class="popupinput" type="checkbox" id="shownewselement">
    <span class="slider round"></span>
    </label>
</div>
</div>
</body>`;