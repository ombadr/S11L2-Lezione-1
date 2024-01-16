import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// useSelector restituisce un valore a partire da un metodo di callback, in cui ricevo come parametro il redux store

const CartIndicator = () => {
	const navigate = useNavigate();
	const cartLength = useSelector(state => state.cart.content.length);

	return (
		<div className="d-flex justify-content-end my-4">
			<Button
				onClick={() => navigate('cart')}
				className="d-flex align-items-center">
				<FaShoppingCart />
				<span className="ms-2">{cartLength}</span>
			</Button>
		</div>
	);
};

export default CartIndicator;
