const btnWrapper = document.querySelector('.participants__buttons--wrapper');
const contentWrapper = document.querySelector('.participants__wrapper--content');
const wrapperBtnBefore = document.querySelector('.participants__wrapper--header');

function moveSliderBtn() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 680) {
        contentWrapper.after(btnWrapper);
    } else {
        wrapperBtnBefore.append(btnWrapper);
    }
}

moveSliderBtn();
window.addEventListener('resize', moveSliderBtn);
