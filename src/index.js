//import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';

//ReactDOM.render(<App/>, document.querySelector("#root"))
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App tab="home" />);