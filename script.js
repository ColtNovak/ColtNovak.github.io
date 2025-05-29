			document.addEventListener('DOMContentLoaded', function() {

    AOS.init({

        duration: 800,

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

   document.addEventListener('DOMContentLoaded', () => {

  if ('ontouchstart' in window) {

    document.body.classList.remove('cursor-none');

    document.querySelector('.custom-cursor')?.remove();

  }

}); document.querySelectorAll('a[href^="#"]').forEach(anchor => {

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

})
					 async function copyToClipboard(text, button) {
            try {
                await navigator.clipboard.writeText(text);
                
                const originalHTML = button.innerHTML;
                
                button.innerHTML = `
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                `;
                button.classList.add('btn-success');
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.classList.remove('btn-success');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }	
