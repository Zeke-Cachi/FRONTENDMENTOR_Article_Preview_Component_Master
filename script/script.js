//VARIABLES
const socialMedia = document.getElementById('socialMedia');
const shareButton = document.getElementById('socialMediaArrow');
const littleSquare = document.getElementById('socialMediaArrowPointing');
let switcher = false;

//FUNCTIONALITY

shareButton.addEventListener('click', () => {
    if (switcher === false) {
        socialMedia.classList.remove('hide');
        littleSquare.classList.remove('hide');
        switcher = true
    } else {
        socialMedia.classList.add('hide');
        littleSquare.classList.add('hide');
        switcher = false
    }
})

