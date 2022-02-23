import React, { Component } from 'react';
import "./style.scss"
import {Link} from "react-router-dom"
export default class Foter extends Component {
  render() {
      return (<footer className="footer">
          Copyright © 2021 <Link to="http://www.bibooo.top">習慣の孤獨</Link>
      </footer>)
  }
}
