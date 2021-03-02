import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test'
import HelloComponent from './component/HelloComponent'
import Login from './component/Login'
import reportWebVitals from './reportWebVitals';

  class StateFullComponent extends React.Component {
    render() {
      return <p> StateFullComponents </p>
    }
  }

ReactDOM.render(<Login />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
