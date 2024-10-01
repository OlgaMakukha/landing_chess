document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.stages__wrapper--content__items');
    const items = wrapper.querySelectorAll('.stages__wrapper--content__item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = 5;

    function initMobileSlider() {
        if (window.innerWidth <= 640) {
            createCombinedWrappers();
            wrapper.style.display = 'flex';
            updateSlider();
        } else {
            removeCombinedWrappers();
            wrapper.style.display = '';
            wrapper.style.transform = '';
        }
    }

    function createCombinedWrappers() {
        if (!wrapper.querySelector('.combined-wrapper')) {
            const wrapper1 = document.createElement('div');
            wrapper1.className = 'combined-wrapper';
            wrapper1.appendChild(items[0]);
            wrapper1.appendChild(items[1]);
            wrapper.insertBefore(wrapper1, items[2]);

            const wrapper2 = document.createElement('div');
            wrapper2.className = 'combined-wrapper';
            wrapper2.appendChild(items[3]);
            wrapper2.appendChild(items[4]);
            wrapper.insertBefore(wrapper2, items[5]);
        }
    }

    function removeCombinedWrappers() {
        const combinedWrappers = wrapper.querySelectorAll('.combined-wrapper');
        combinedWrappers.forEach(wrapp => {
            while (wrapp.firstChild) {
                wrapper.insertBefore(wrapp.firstChild, wrapp);
            }
            wrapp.remove();
        });
    }

    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentSlide * 20}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('dot--active', index === currentSlide);
        });
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    window.addEventListener('resize', initMobileSlider);
    initMobileSlider();
});
