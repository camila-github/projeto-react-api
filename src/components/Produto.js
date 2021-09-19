import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fecheProduto(url) {
      try {
        setCarregando(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setCarregando(false);
      }
    }

    fecheProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (carregando) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Helmet>
        <title>Code eCommerce | {produto.nome}</title>
        <meta name="description" content="Code eCommerce" />
      </Helmet>
      <div>
          <img key={produto.fotos[0].titulo} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} /> 
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
