import React,{Component} from 'react';
import './App.scss';
import {Header} from "./modules/Header";
import {Modal} from './widgets/Modal'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux'
import Store from "./store";
let store = Store();

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
                <div className="App">
                    <BrowserRouter>
                        <Header onButtonClick={this.onButtonClick}/>
                        <div className="container">
                            <Switch>
                                {routes.map(router =>
                                    <Route
                                        path={router.path}
                                        component={router.component}
                                        exact={router.exact}
                                        key={router.path}
                                    />
                                )}
                            </Switch>
                        </div>
                    </BrowserRouter>
                    <Modal isModalOpen={isModalOpen} onButtonClick={this.onButtonClick}>test modal</Modal>
                </div>
            </Provider>
        );
    }
}

export default App;
