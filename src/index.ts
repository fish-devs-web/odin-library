const root = document.documentElement;

const themeToggler = document.getElementById('theme-toggle')!;
themeToggler.addEventListener('click', () => {
    root.classList.toggle('light');
    console.log(`Doing stuff`);
});

const dropDown = document.querySelector('.mini-profile')! as HTMLElement;
const profNav = document.querySelector('.profile-options')!;

dropDown.addEventListener('click', () => {
    profNav?.classList.toggle('hidden');
});
