let nightMode = document.querySelector('.slider ');

 let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    document.querySelector('body').style.background = '#243237'
    document.querySelector('footer').style.background = 'black'
    document.querySelector('.card__cont-modal').style.background = '#4a4a48'
    document.querySelector('.paginationPageNumber').style.color = '#ff6b01'
  localStorage.setItem("dark-mode", "enabled");
  var nightModeTitles = document.querySelectorAll('.movie-title');
          nightModeTitles.forEach((el) => {
            el.attributes.class.value = 'night-title'
            console.log(el.attributes.class.value)
          })

        var nightModeGeneres = document.querySelectorAll('.tag')
          nightModeGeneres.forEach((el) => {
            el.attributes.class.value = 'night-genre'
        })
  
};
const disableDarkMode = () => {
     document.querySelector('body').style.background = '#ffffff'
      document.querySelector('footer').style.background = '#f7f7f7'
      document.querySelector('.card__cont-modal').style.background = '#ffffff'
      document.querySelector('.paginationPageNumber').style.color = 'black';
  localStorage.setItem("dark-mode", "disabled");
   var dayModeTitles = document.querySelectorAll('.night-title');
      dayModeTitles.forEach((el) => {
        el.attributes.class.value = 'movie-title'
        console.log(el.attributes.class.value)
      })

      var dayModeGeneres = document.querySelectorAll('.night-genre')
          dayModeGeneres.forEach((el) => {
            el.attributes.class.value = 'tag'
          })
};
if (darkMode === "enabled") {
  enableDarkMode(); 
}
 nightMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode"); 
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
    
  }
});

