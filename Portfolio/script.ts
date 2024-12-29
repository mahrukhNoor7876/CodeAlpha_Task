document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const navLinks = document.querySelector('.navLinks') as HTMLElement;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');  
        navLinks.classList.toggle('active');   
    });
});