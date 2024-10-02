const text = document.getElementById('call__text--none');
const imgWrapper = document.querySelector('.call__img');
const textWrapper = document.querySelector('.call__text');

function moveText() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 980) {
        imgWrapper.after(text);
    } else {
        textWrapper.append(text);
    }
}

moveText();
window.addEventListener('resize', moveText);