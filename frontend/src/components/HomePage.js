import React, { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <h1>Yoga registration</h1>
    );
  }
}