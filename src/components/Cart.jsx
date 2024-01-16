import { Row, Col, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
	const cart = useSelector(state => state.cart.content);
	const dispatch = useDispatch();

	return (
		<Row>
			<Col sm={12}>
				{cart.length == 0 ? (
					<h2>Nessun elemento presente nel carrello</h2>
				) : (
					<ul style={{ listStyle: 'none' }}>
						{cart.map((book, i) => (
							<li key={i} className="my-4">
								<Button
									variant="danger"
									onClick={() => {
										dispatch({
											type: 'REMOVE_FROM_CART',
											payload: i,
										});
									}}>
									<FaTrash />
								</Button>
								<img
									src={book.imageUrl}
									alt={`Copertina ${book.title}`}
									className="book-cover-small"
								/>
								{book.title}
							</li>
						))}
					</ul>
				)}
			</Col>
			<Row>
				<Col sm={12} className="fw-bold mb-3 ms-4">
					TOTALE:{' '}
					{cart.reduce(
						(acc, currentValue) =>
							acc + parseFloat(currentValue.price),
						0
					)}{' '}
					🍎
				</Col>
			</Row>
		</Row>
	);
};

export default Cart;
