"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = document.documentElement;
const overlay = document.getElementById('overlay');
const themeToggler = document.getElementById('theme-toggle');
themeToggler.addEventListener('click', () => {
    root.classList.toggle('light');
    console.log(`Doing stuff`);
});
const miniProfile = document.querySelector('.visible');
const profNav = document.querySelector('.profile-options');
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
const bookTemplate = document.getElementById('book-template');
const bookshelf = document.getElementById('book-shelf');
if (!bookTemplate || !bookshelf)
    throw new Error('Missing template or container');
class Book {
    id = '';
    title;
    author;
    review;
    read;
    pages;
    cover;
}
let books = [
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt, David Thomas',
        review: 'A classic on software craftsmanship.',
        read: true,
        pages: 352,
        cover: 'https://imgs.search.brave.com/OQoU3s-SJ-YCL-arpmXzcBnwJpDPQcxm2Sv54wXcTBs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWFzb25zLmNvbS9p/bWFnZXMvbS80ODhh/NDllODNmMjU0N2Fi/L29yaWdpbmFsLzk3/ODAxMzU5NTcwNTlf/NTYzODkzMTMyMy5q/cGc_d2lkdGg9MjUx/JmhlaWdodD0zODkm/bW9kZT1tYXg',
    },
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        review: 'Opinionated but influential on coding style.',
        read: true,
        pages: 464,
        cover: 'https://imgs.search.brave.com/_lj4J_-wlHV4bUvg4BgSCFjJLVEd3T7oivTJspLnT-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFFWUxVRGFGOEwu/anBn',
    },
    {
        title: 'You Don’t Know JS Yet',
        author: 'Kyle Simpson',
        review: 'Deep dive into the quirks of JavaScript.',
        read: false,
        pages: 278,
        cover: 'https://imgs.search.brave.com/O0tU-Cf07Lg705nVsVcdIh-TLjVlDzElTOp37_LRY-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxTVZ6SEtqWENM/LmpwZw',
    },
    {
        title: 'Design Patterns',
        author: 'Erich Gamma et al.',
        review: 'Seminal book introducing the GoF patterns.',
        read: false,
        pages: 395,
        cover: 'https://imgs.search.brave.com/Mlo-P-UyxPY091DPkEUVuocdbFXxkypO88rznlTLMOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFwZXJ0cnVlLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzA5L3Bh/dHRlcm4tYmFzZWQt/Ym9vay1jb3Zlci1k/ZXNpZ24tc3R5bGUu/anBn',
    },
    {
        title: 'Refactoring',
        author: 'Martin Fowler',
        review: 'Systematic approach to improving existing code.',
        read: true,
        pages: 448,
        cover: 'https://imgs.search.brave.com/blof2p0ZZNZYtm7Nb5MoaNgrpx5wOVou0b6PBnLLjPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5hYmVib29r/cy5jb20vaXNibi85/NzgwMzIxOTg0MTM1/LXVrLTMwMC5qcGc',
    },
];
books.forEach((book) => {
    let currentBook = bookTemplate.content.cloneNode(true);
    console.log(currentBook);
    let titleDiv = currentBook.querySelector('.title');
    let authorDiv = currentBook.querySelector('.author');
    let reviewDiv = currentBook.querySelector('.review');
    let readDiv = currentBook.querySelector('.read');
    let pagesDiv = currentBook.querySelector('.pages-count');
    let img = currentBook.querySelector('#cover');
    titleDiv.textContent = book.title;
    authorDiv.textContent = book.author;
    reviewDiv.textContent = book.review;
    readDiv.textContent = book.read === true ? 'Yes' : 'No';
    pagesDiv.textContent = book.pages?.toString();
    img?.setAttribute('src', book.cover);
    bookshelf.appendChild(currentBook);
});
//# sourceMappingURL=index.js.map