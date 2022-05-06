import Head from 'next/head'
import { ProductCard } from '../components/ProductCard'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | MyShopping</title>
      </Head>

      <div className={styles.productContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
