import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import {App} from "./App";
import 'css-paint-polyfill';
CSS.paintWorklet.addModule(new URL('./scfBorder.js', import.meta.url));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
