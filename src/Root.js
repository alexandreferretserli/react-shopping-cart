import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import store from "./services/store";

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

Root.propTypes = {
  children: PropTypes.any.isRequired,
  initialState: PropTypes.any
};

export default Root;
