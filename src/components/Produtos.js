import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setprodutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then((resolve) => resolve.json())
    .then((json) =>  setprodutos(json))
  },[]);

if(produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Helmet>
        <title>Code eCommerce</title>
        <meta name="description" content="Descrição do site Code eCommerce" />
      </Helmet>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img key={produto.fotos[0].titulo} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
      
    </section>
  )
}

export default Produtos
