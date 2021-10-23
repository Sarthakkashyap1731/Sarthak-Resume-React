import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Main from './MainContent/MainContent';
export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
