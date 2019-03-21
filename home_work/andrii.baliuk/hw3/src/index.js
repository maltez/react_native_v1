// jquery part
const $ = require("jquery");
import "jquery-validation";

$(document).ready(function() {
  $("#jqueryForm").validate({
    submitHandler: function(form) {
      alert("Form validation successful");
      return false;
    },
    rules: {
      phone: {
        required: true,
        minlength: 10
      },
      email: {
        email: true,
        required: true
      }
    }
  });
});

// React part
import React from "react";
import ReactDom from "react-dom";
import styles from "./main.css";

const Header = () => (
  <div>
    <h1>Hello React!</h1>
    <p className="text">React better than jQuery.</p>
  </div>
);
ReactDom.render(<Header />, document.getElementById("reactApp"));
