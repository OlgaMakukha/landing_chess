document.addEventListener('DOMContentLoaded', function() {
    const wrappers = document.querySelectorAll('.runnig__line--wrapper');

    wrappers.forEach(wrapper => {
        const content = wrapper.innerHTML;
        const wrapperWidth = wrapper.offsetWidth;

        wrapper.innerHTML = content + content;

        let position = 0;
        function moveText() {
            position--;
            if (position <= -wrapperWidth) {
                position = 0;
            }
            wrapper.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(() => moveText());
        }

        moveText();
    });
});
