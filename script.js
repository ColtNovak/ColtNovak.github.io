document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'bottom',    
        distance: '50px',    
        duration: 1000,       
        delay: 200,           
        opacity: 0,           
        scale: 0.8,           
        easing: 'ease-out',   
        reset: false,         
    });

    sr.reveal('.section', { interval: 300 }); 
});
const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      opacity: 0,
      scale: 0.8,
      easing: 'ease-out',
      reset: false,
    });

    sr.reveal('#intro', { interval: 300 });
    sr.reveal('#skills', { interval: 300 });
    sr.reveal('#projects', { interval: 300 });
    sr.reveal('#experience', { interval: 300 });
    sr.reveal('#contact', { interval: 300 });

    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 100 });
    sr.reveal('.experience-card', { interval: 100 });
