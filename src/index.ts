const root = document.documentElement;
const overlay = document.getElementById('overlay');

const themeToggler = document.getElementById('theme-toggle')!;
themeToggler.addEventListener('click', () => {
    root.classList.toggle('light');
    console.log(`Doing stuff`);
});

const miniProfile = document.querySelector('.visible')! as HTMLElement;
const profNav = document.querySelector('.profile-options')!;

miniProfile.addEventListener('click', () => {
    profNav?.classList.toggle('hidden');
    overlay?.classList.toggle('hidden');
});

overlay?.addEventListener('click', () => {
    overlay?.classList.toggle('hidden');
    !profNav?.classList.toggle('hidden')
        ? profNav.classList.toggle('hidden')
        : profNav.classList.toggle('');
});
