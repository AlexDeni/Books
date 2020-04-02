import React,{Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux'
import {Modal} from './widgets/Modal'
import './App.scss';
import {Header} from "./modules/Header";
import {actionGetBooks} from './store/Books/actionBooks'
import Store from "./store";

let store = Store();
store.dispatch(actionGetBooks());

class App extends Component{
    state = {
        isModalOpen: false
    };
    onButtonClick = isModalOpen => {
        this.setState({ isModalOpen });
    };

    render() {
        const {isModalOpen} = this.state;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header onButtonClick={this.onButtonClick}/>
                    <section>
                        <div className="container">
                            <Switch>
                                {routes.map(router =>
                                     <Route
                                        path={router.path}
                                        component={router.component}
                                        exact={router.exact}
                                        key={router.path}
                                     />)}
                            </Switch>
                        </div>
                    </section>
                </BrowserRouter>
                <Modal isModalOpen={isModalOpen} onButtonClick={this.onButtonClick}>test modal</Modal>
            </Provider>
        );
    }
}

export default App;
