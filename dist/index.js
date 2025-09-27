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
const newBookTemplate = document.getElementById('new-book-template');
const bookshelf = document.getElementById('book-shelf');
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
];
function updateBooks() {
    bookshelf.replaceChildren();
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
    let newBookTemp = newBookTemplate.content.cloneNode(true);
    bookshelf.appendChild(newBookTemp);
    const newBookDiv = document.getElementById('new-book-div');
    newBookDiv?.addEventListener('click', () => {
        addBookDialog.showModal();
        console.log(`showing modal`);
    });
}
updateBooks();
const addBookDialog = document.getElementById('add-book-dialog');
const addBook = document.getElementById('add-book-button');
const addBookCancel = document.getElementById('cancel-add-book');
addBook.addEventListener('click', () => {
    console.log('Adding books');
});
addBookCancel.addEventListener('click', () => {
    addBookDialog.close();
});
const form = document.getElementById('form-data');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(`Form data`);
    console.log(formData.get('read'));
    const data = {
        title: formData.get('name'),
        author: formData.get('author'),
        review: formData.get('review'),
        read: formData.get('read') === 'on' ? true : false,
        cover: formData.get('cover'),
        pages: formData.get('pages'),
    };
    books.push(data);
    addBookDialog.close();
    updateBooks();
});
//# sourceMappingURL=index.js.map