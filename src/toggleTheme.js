document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark';
  
    htmlElement.setAttribute('data-theme', currentTheme);
  
    themeToggleBtn.addEventListener('click', () => {
      let newTheme = 'light';
      if (htmlElement.getAttribute('data-theme') === 'light') {
        newTheme = 'dark';
      }
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
});
