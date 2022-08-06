import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {BrowserRouter} from "react-router-dom"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//Note: Use [ npx json-server --watch Mock-data/data.json --port 3004 ]to start API server
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
