import FormContainer from "./components/container/FormContainer.jsx";
import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;