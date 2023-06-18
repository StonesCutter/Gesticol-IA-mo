import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routing from "./routing/routing";

ReactDOM.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./style/common/common.scss";
// import Routing from "./routing/Routing";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import ScrollToTop from "./screens/scrollToTop/ScrollToTop";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <ScrollToTop>
//         <Routing />
//       </ScrollToTop>
//     </Provider>
//   </BrowserRouter>
// );
