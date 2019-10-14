import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MainLayout from './pages/mainLayout'
import 'antd/dist/antd.css';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route path='/' render={()=>(<Redirect to='/views' />)}></Route> */}
        <Route path='/' component={MainLayout}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
