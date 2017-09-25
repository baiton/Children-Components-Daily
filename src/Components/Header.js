import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-column">
        <h1 className="navbar-brand d-flex align-items-center" href="/">Navigation Bar</h1>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active align-items-center">
            <a className="btn btn-secondary" href="/">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
