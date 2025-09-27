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

const bookTemplate = document.getElementById(
    'book-template'
) as HTMLTemplateElement;
const newBookTemplate = document.getElementById(
    'new-book-template'
) as HTMLTemplateElement;
const bookshelf = document.getElementById('book-shelf') as HTMLElement;

class Book {
    id: string = '';
    title?: string;
    author?: string;
    review?: string;
    read?: boolean;
    pages?: number;
    cover?: string;
}

const books = [
    {
        title: 'Journey to the Center of the Earth',
        author: 'Jules Verne',
        review: 'A thrilling adventure through underground worlds.',
        read: true,
        pages: 320,
        cover: '../resources/A_Journey_to_the_Centre_of_the_Earth-1874.jpg',
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        review: 'Epic underwater exploration and science fiction.',
        read: false,
        pages: 426,
        cover: '../resources/TwentyThousandLeaguesUndertheSea.jpg',
    },
    {
        title: 'Around the World in 80 Days',
        author: 'Jules Verne',
        review: 'A fast-paced, globe-trotting adventure.',
        read: true,
        pages: 256,
        cover: '../resources/Aroundtheworldin80Days.jpg',
    },
    {
        title: 'Flatland: A Romance of Many Dimensions',
        author: 'Edwin A. Abbott',
        review: 'A mathematical novella exploring dimensions and society.',
        read: true,
        pages: 96,
        cover: '../resources/Flatland.jpg',
    },
    {
        title: 'Gödel, Escher, Bach: An Eternal Golden Braid',
        author: 'Douglas Hofstadter',
        review: 'A deep dive into mathematics, art, and self-reference.',
        read: false,
        pages: 777,
        cover: '../resources/Godel,_Escher,_Bach_(first_edition).jpg',
    },
    {
        title: 'The Man Who Counted',
        author: 'Malba Tahan',
        review: 'Mathematical puzzles and stories from Middle Eastern folklore.',
        read: true,
        pages: 300,
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/e1/The_Man_Who_Counted.jpg',
    },
] as Book[];

function updateBooks() {
    bookshelf.replaceChildren();
    books.forEach((book) => {
        let currentBook = bookTemplate.content.cloneNode(
            true
        ) as DocumentFragment;
        console.log(currentBook);

        let titleDiv = currentBook.querySelector('.title') as HTMLElement;
        let authorDiv = currentBook.querySelector('.author') as HTMLElement;
        let reviewDiv = currentBook.querySelector('.review') as HTMLElement;
        let readDiv = currentBook.querySelector('.read') as HTMLElement;
        let pagesDiv = currentBook.querySelector('.pages-count') as HTMLElement;
        let img = currentBook.querySelector('#cover');

        titleDiv.textContent = book.title!;
        authorDiv.textContent = book.author!;
        reviewDiv.textContent = book.review!;
        readDiv.textContent = book.read === true ? 'Yes' : 'No';
        pagesDiv.textContent = book.pages?.toString()!;
        img?.setAttribute('src', book.cover!);
        bookshelf.appendChild(currentBook);
    });
    let newBookTemp = newBookTemplate.content.cloneNode(
        true
    ) as DocumentFragment;
    bookshelf.appendChild(newBookTemp);
    const newBookDiv = document.getElementById('new-book-div');
    newBookDiv?.addEventListener('click', () => {
        addBookDialog.showModal();
        console.log(`showing modal`);
    });
}
updateBooks();

const addBookDialog = document.getElementById(
    'add-book-dialog'
) as HTMLDialogElement;

const addBook = document.getElementById('add-book-button') as HTMLButtonElement;
const addBookCancel = document.getElementById(
    'cancel-add-book'
) as HTMLButtonElement;

addBook.addEventListener('click', () => {
    console.log('Adding books');
});

addBookCancel.addEventListener('click', () => {
    addBookDialog.close();
});

const form = document.getElementById('form-data') as HTMLFormElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(`Form data`);

    console.log(formData.get('read'));

    const data = {
        title: formData.get('name') as string,
        author: formData.get('author') as string,

        review: formData.get('review') as string,
        read: formData.get('read') === 'on' ? true : false,
        cover: formData.get('cover') as string,
        pages: formData.get('pages') as unknown as number,
    } as Book;
    books.push(data);
    addBookDialog.close();
    updateBooks();
});
