import { v4 as uuidv4 } from 'uuid';

export default class BookStoreService {
  books = [
    {
      id: uuidv4(),
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51Wrlbko5QL._SL160_.jpg',
      price: 20,
    },
    {
      id: uuidv4(),
      title: 'Ulysses',
      author: 'James Joyce',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51h6FygcbxL._SL160_.jpg',
      price: 23,
    },
    {
      id: uuidv4(),
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/41NrvHGS3lL._SL160_.jpg',
      price: 22,
    },
    {
      id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SL160_.jpg',
      price: 21,
    },
    {
      id: uuidv4(),
      title: "Alice's Adventures in Wonderland",
      author: 'Lewis Carroll',
      cover: 'http://ecx.images-amazon.com/images/I/41h9Pz2qeIL._SL160_.jpg',
      price: 26,
    },
    {
      id: uuidv4(),
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51tkcSAhSDL._SL160_.jpg',
      price: 18,
    },
    {
      id: uuidv4(),
      title: 'Moby Dick',
      author: 'Herman Melville',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/41WMBltiqdL._SL160_.jpg',
      price: 30,
    },
    {
      id: uuidv4(),
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg',
      price: 35,
    },
    {
      id: uuidv4(),
      title: 'Lolita',
      author: 'Vladimir Nabokov',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SL160_.jpg',
      price: 17,
    },
    {
      id: uuidv4(),
      title: 'Hamlet',
      author: 'William Shakespeare',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg',
      price: 18,
    },
    {
      id: uuidv4(),
      title: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
      cover: 'http://ecx.images-amazon.com/images/I/41gTM5%2BdbfL._SL160_.jpg',
      price: 23,
    },
    {
      id: uuidv4(),
      title: 'The Odyssey',
      author: 'Homer',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SL160_.jpg',
      price: 27,
    },
    {
      id: uuidv4(),
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoyevsky',
      cover: 'http://ecx.images-amazon.com/images/I/51c4Gb6Uo0L._SL160_.jpg',
      price: 24,
    },
    {
      id: uuidv4(),
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoyevsky',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/41c99G44teL._SL160_.jpg',
      price: 28,
    },
    {
      id: uuidv4(),
      title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      cover: 'http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg',
      price: 29,
    },
    {
      id: uuidv4(),
      title: 'The Divine Comedy',
      author: 'Dante Alighieri',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/51Z5kuQVBjL._SL160_.jpg',
      price: 30,
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.books);
        // reject(new Error('Error!'));
      }, 500);
    });
  }
}
