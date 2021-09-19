import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>@2021 - Desenvolvido por 
          <a href="https://github.com/camila-github" rel="noreferrer" target="_blank"> Camila Augusta</a>
      </p>
    </footer>
  )
}

export default Footer
