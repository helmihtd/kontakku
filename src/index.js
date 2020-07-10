import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker"
import "tachyons";
import "./index.css";
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
