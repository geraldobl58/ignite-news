import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Abril de 2021</time>
            <strong>NBA: Nets x 76ers</strong>
            <p>Kevin Durant inicialmente jogaria hoje, mas como a partida de segunda-feira dos Nets contra o Timberwolves foi adiada, a comissão técnica optou por poupá-lo para que não jogue jogos em dias consecutivos.</p>
          </a>
          <a href="#">
            <time>12 de Abril de 2021</time>
            <strong>NBA: Nets x 76ers</strong>
            <p>Kevin Durant inicialmente jogaria hoje, mas como a partida de segunda-feira dos Nets contra o Timberwolves foi adiada, a comissão técnica optou por poupá-lo para que não jogue jogos em dias consecutivos.</p>
          </a>
          <a href="#">
            <time>12 de Abril de 2021</time>
            <strong>NBA: Nets x 76ers</strong>
            <p>Kevin Durant inicialmente jogaria hoje, mas como a partida de segunda-feira dos Nets contra o Timberwolves foi adiada, a comissão técnica optou por poupá-lo para que não jogue jogos em dias consecutivos.</p>
          </a>
        </div>
      </main>
    </>
  )
}