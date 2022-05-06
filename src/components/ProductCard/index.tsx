import Image from "next/image"
import styles from "./styles.module.scss"


export function ProductCard() {
    return (
        <div className={styles.container}>
            <Image
                priority
                src="/images/terno.jpg"
                alt="Terno"
                width={100}
                height={320}
            />
            <h3>Terno Xadrez</h3>

            <hr />
            <div className={styles.content}>
                <p>R$400,00</p>
                
                <div className={styles.favoriteContainer}>
                    <Image
                        src="/images/heart.svg"
                        alt="Ícone de coração"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    )
}