import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store';
import {persistor} from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

const Root = () => {
  return (
      <BrowserRouter basename='/'>
          <Route path={`/`} component={App}></Route>
      </BrowserRouter>
  )

}

ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        {/*网页内容*/}
        <Root />
    </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
