let nightMode = document.querySelector('.slider ');
let mode = false;

nightMode.addEventListener('click', function () {
    if (mode == false) {
        mode = true;
        document.querySelector('body').style.background = '#243237'
        document.querySelector('footer').style.background = 'black'
        document.querySelector('.card__cont-modal').style.background = '#4a4a48'
        document.querySelector('.paginationPageNumber').style.color = '#ff6b01'
    
        // const a = document.querySelectorAll('.movie-title');
        // for (let i = 0; i < a.length; i += 1){
        //    i.classList.add("ab")
        // }
      
    }
  
  else {
    mode = false
      document.querySelector('body').style.background = '#ffffff'
      document.querySelector('footer').style.background = '#f7f7f7'
      document.querySelector('.card__cont-modal').style.background = '#ffffff'
      document.querySelector('.paginationPageNumber').style.color = 'black';
    //   n

    
  }
//   localStorage.setItem('key', JSON.stringify.nightMode)
})

// let active = localStorage.getItem('key');

// if (active === null) {
//   mode = true;
// }
//   else {
//     mode = false;
//   }
