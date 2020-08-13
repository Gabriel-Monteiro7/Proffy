import React from "react";

// import { Container } from './styles';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "./config/ReactotronConfig";
import { persistor, store } from "./store";
import { GlobalStyle } from "assets/styles/global";
import Routes from "routes";
import history from "./service/history";

const src: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes history={history} />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
};

export default src;
