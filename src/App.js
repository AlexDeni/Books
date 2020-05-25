import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { Modal } from './widgets/Modal';
import './App.scss';
import { Header } from './modules/Header';
import { actionGetBooks } from './store/Books/actionBooks';
import { actionGetNews } from './store/News/actionNews';
import FormikForm from './widgets/Formik/index';
import { ScrollButton } from './ui/ScrollButton';
import ShopOrder from './widgets/ShopBasket.js/ShopOrder';
import Store from './store';

let store = Store();
store.dispatch(actionGetBooks());
store.dispatch(actionGetNews());
// А шо за диспатчи даже не в классе? componentDidMount жи есть

class App extends Component {
	state = {
		isHomeOpen: false,
		isShopOpen: false,
	};
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
				<BrowserRouter basename={process.env.PUBLIC_URL}>
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
						{/* Модалки не так должны работать -  у тебя тут должен быть компонент который рендерит модалки. Ты должен модалки вызывать через редакс. Почитай как сделать модадки на реакте - тут плохо*/}
						<Modal
							title="Войти"
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
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
