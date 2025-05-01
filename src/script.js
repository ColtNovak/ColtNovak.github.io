import AOS from "https://esm.sh/aos";
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        delay: 120,
        disable: window.innerWidth < 768
    });

    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('.btn-ghost').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.querySelector('svg').classList.add('animate-pulse');
        });
        btn.addEventListener('mouseleave', () => {
            btn.querySelector('svg').classList.remove('animate-pulse');
        });
    });
});
