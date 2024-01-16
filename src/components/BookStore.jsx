import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';

const BookStore = () => {
	const [books, setBooks] = useState([]);
	const [bookSelected, setBookSelected] = useState(null);

	useEffect(() => {
		getBooks();
	}, []);

	const getBooks = async () => {
		try {
			let resp = await fetch(
				'https://striveschool-api.herokuapp.com/food-books'
			);
			if (resp.ok) {
				let fetchedBooks = await resp.json();
				setBooks(fetchedBooks);
			} else {
				console.log('Errore nel recupero dei dati!');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const changeBook = book => setBookSelected(book);

	return (
		<>
			{books && (
				<Row className="center-row">
					<Col lg={4}>
						<BookList
							bookSelected={bookSelected}
							changeBook={changeBook}
							books={books}
						/>
					</Col>
					<Col lg={8}>
						<BookDetail bookSelected={bookSelected} />
					</Col>
				</Row>
			)}
		</>
	);
};

export default BookStore;
