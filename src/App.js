import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BookStore from './components/BookStore';
import Cart from './components/Cart';
import CartIndicator from './components/CartIndicator';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Container className="main-container">
				<Row>
					<Col className="text-center backgroud-div">
						<Link to="/">
							<h1>Book Store</h1>
						</Link>
					</Col>
					<CartIndicator />
				</Row>
				<Routes>
					<Route path="/" element={<BookStore />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
