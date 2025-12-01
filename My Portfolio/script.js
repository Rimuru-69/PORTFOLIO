const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');
});
