// Carousel & Slider Execution
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let scrollPos = 0;

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            scrollPos = Math.min(scrollPos + 300, maxScroll);
            track.style.transform = `translateX(-${scrollPos}px)`;
        });

        prevBtn.addEventListener('click', () => {
            scrollPos = Math.max(scrollPos - 300, 0);
            track.style.transform = `translateX(-${scrollPos}px)`;
        });
    }
});
