// Filter Functionality
const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelector('.filters .active')?.classList.remove('active');
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Video Hover Preview
document.querySelectorAll('.card video').forEach(video => {

    video.muted = true;
    video.playsInline = true;

    video.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('click', () => {

        const source = card.querySelector('source');

        if (!source) return;

        lightboxVideo.src = source.src;
        lightbox.style.display = 'flex';

        lightboxVideo.load();
        lightboxVideo.play().catch(() => {});

    });

});

// Close Button
closeBtn.addEventListener('click', () => {

    lightboxVideo.pause();
    lightboxVideo.src = '';

    lightbox.style.display = 'none';

});

// Close on Background Click
lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {

        lightboxVideo.pause();
        lightboxVideo.src = '';

        lightbox.style.display = 'none';
    }

});
document.getElementById("subscribeForm")
.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Thank you for subscribing!");
});