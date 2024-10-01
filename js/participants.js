document.addEventListener('DOMContentLoaded', function() {
    const participantsWrapper = document.querySelector('.participants__wrapper--content');
    const participantsList = document.querySelector('.participants__wrapper--content__items');
    const participants = document.querySelectorAll('.participants__item');
    const prevBtn = document.querySelector('.participants__prev-btn');
    const nextBtn = document.querySelector('.participants__next-btn');
    const currentSlideElement = document.querySelector('.participants__buttons--wrapper p');
    const totalSlides = participants.length;
    let currentSlide = 0;
    let slidesPerView = 3;
    let slidesToMove = 3;

    function updateSlidesPerView() {
        if (window.innerWidth <= 700) {
            slidesPerView = 1;
            slidesToMove = 1;
        } else if (window.innerWidth <= 1050) {
            slidesPerView = 2;
            slidesToMove = 2;
        } else {
            slidesPerView = 3;
            slidesToMove = 3;
        }
        updateSlider();
    }

    function updateSlider() {
        const containerWidth = participantsWrapper.offsetWidth;
        const slideWidth = containerWidth / slidesPerView;
    
        participants.forEach(participant => {
            participant.style.width = `${slideWidth}px`;
        });
    
        const totalWidth = slideWidth * totalSlides;
        participantsList.style.width = `${totalWidth}px`;
    
        const maxSlide = totalSlides - slidesPerView;
        currentSlide = Math.min(currentSlide, maxSlide);
    
        const offset = currentSlide * slideWidth;
        participantsList.style.transform = `translateX(-${offset}px)`;
    
        const displayedSlide = Math.floor(currentSlide / slidesToMove) + 1;
        const totalGroups = Math.ceil((totalSlides - slidesPerView + 1) / slidesToMove);
        currentSlideElement.innerHTML = `${displayedSlide} <span class="participants--number">/ ${totalGroups}</span>`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + slidesToMove) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - slidesToMove + totalSlides) % totalSlides;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', updateSlidesPerView);

    updateSlidesPerView();

    setInterval(nextSlide, 4000);
});
