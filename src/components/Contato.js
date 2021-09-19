import React from 'react'
import { Helmet } from 'react-helmet';
import { Player} from '@lottiefiles/react-lottie-player';
import styles from './Contato.module.css';
import foto from '../img/contato.json'


const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Helmet>
        <title>Code eCommerce | Contato</title>
        <meta name="description" content="Entre em contato"/>
      </Helmet> 

      <Player autoplay loop src={foto} > </Player>
      <div>
      <h1>Entre em contato.</h1>
      <ul className={styles.dados}>
        <li><strong>Email</strong>: loremipsum@email.com</li>
        <li><strong>Tel</strong>: 11 1234-5678</li>
        <li><strong>Endereço</strong>: Rua Lorem Ipsum, 50</li>
      </ul>
      </div>
    </div>
  )
}
export default Contato
