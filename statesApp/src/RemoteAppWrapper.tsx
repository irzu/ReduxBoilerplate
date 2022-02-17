import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const RemoteAppWrapper = (props) => (
    <Provider store={store}>
        <App {...props} />
    </Provider>
);
  
export default RemoteAppWrapper;
  
