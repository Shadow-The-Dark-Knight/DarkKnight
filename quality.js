
/* work on fixing button think where
high and theme buttons you could only chosse one of theme) 
*/
function changeButton(selector) {
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggled')) {

    turnOffPerviousButton();

    button.classList.add('is-toggled')
  } else {
    button.classList.remove('is-toggled')
  }
}


function turnOffPerviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}



function changeBlindness(selector) {
  const changeThemeButton = document.querySelector(selector);
  if(!changeThemeButton.classList.contains('is-Toggled-Blind')) {
    
    previousThemeButton();
  
  changeThemeButton.classList.add('is-Toggled-Blind');
  } else {
    changeThemeButton.classList.remove('is-Toggled-Blind');
  }


}

function previousThemeButton() {
  const previousTheme = document.querySelector('.is-toggled-theme');
  if(previousTheme) {
    previousTheme.classList.remove('is-toggled-theme')
  }
}


// syntax first one has a dot second one doesnt 
// for first function put if statement ! */