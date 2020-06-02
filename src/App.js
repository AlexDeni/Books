import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { Modal } from './widgets/Modal';
import './App.scss';
import { Header } from './modules/Header';
import { getBooks } from './store/Books/action';
import { getNews } from './store/News/action';
import FormikForm from './widgets/Formik/index';
import { ScrollButton } from './ui/ScrollButton';
import ShopOrder from './widgets/ShopBasket.js/ShopOrder';
import Store from './store';

let store = Store();

class App extends Component {
	state = {
		isHomeOpen: false,
		isShopOpen: false,
	};

	componentDidMount() {
		store.dispatch(getBooks());
		store.dispatch(getNews());
	}

	onHomeClick = (isHomeOpen) => {
		this.setState({ isHomeOpen });
	};

	onShopClick = (isShopOpen) => {
		this.setState({ isShopOpen });
	};

	render() {
		const { isHomeOpen, isShopOpen } = this.state;
		return (
			<Provider store={store}>
				<HashRouter basename={process.env.PUBLIC_URL}>
					<Header
						onHomeClick={this.onHomeClick}
						onShopClick={this.onShopClick}
					/>
					<section>
						<Switch>
							{routes.map((router) => (
								<Route
									path={router.path}
									component={router.component}
									exact={router.exact}
									key={router.path}
								/>
							))}
						</Switch>
						<Modal
							title="Войтиn"
							isModalOpen={isHomeOpen}
							onModalClick={this.onHomeClick}
						>
							<FormikForm authType="signIn" onModalClick={this.onHomeClick} />
						</Modal>
						<Modal
							size="m"
							title="Корзина"
							isModalOpen={isShopOpen}
							onModalClick={this.onShopClick}
						>
							<ShopOrder onModalClick={this.onShopClick} />
						</Modal>
					</section>
					<ScrollButton scrollPoint={250} />
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
