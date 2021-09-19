import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import header from '../img/header.png'
import headerText from '../img/headerText.png'

const Header = () => {
  return (
    <header>
      <img className={styles.imgHeader} src={header} alt="Logo" />
      <img className={styles.imgHHeaderText} src={headerText} alt="LogoText" />
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} className={styles.link} to="/" end>
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={styles.active}  className={styles.link} to="contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
