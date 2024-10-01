const text = document.getElementById('call__text--none');
const containerSpan = document.querySelector('.call__text--replace');

function handleResize() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 980 && windowWidth >= 300) {
        const clonedText = text.cloneNode(true);

        const styles = window.getComputedStyle(text);
        clonedText.style.cssText = styles.cssText;

        containerSpan.innerHTML = '';
        containerSpan.appendChild(clonedText);
        containerSpan.style.display = 'block';
        
        text.style.display = 'none';
    } else {
        text.style.display = 'inline';
        containerSpan.style.display = 'none';
    }
}

handleResize();

window.addEventListener('resize', handleResize);
