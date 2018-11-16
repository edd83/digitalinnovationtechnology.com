import * as React from "react";
import { NavLink } from 'react-router-dom';

const LogoImg = require('../../static/logo.png');
const styles = require('./Header.scss');

export default class Header extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('logo').addEventListener('click', () => {
      const locat = new Location();
      locat.assign('www.google.com');
      document.location = locat;
    });
  }

  render() {
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={LogoImg} id="logo" />
        <div className={styles.menuLeft}>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/blog"> Blog </NavLink>
          <NavLink to="/myspace"> My Space </NavLink>
          {/* <NavLink to="/counter"> Counter </NavLink> */}
        </div>
      </div>
    );
  }
}