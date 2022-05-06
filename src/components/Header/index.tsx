import styles from "./styles.module.scss"
import Image from "next/image"
import Link from "next/link"



export function Header() {

    return (
        <header className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    src="/images/cart.svg"
                    alt="Logo"
                    height={35}
                    width={35}
                />
                <h2>MYSHOPPING</h2>
            </div>

            <Link href="/favorites">
                <div className={styles.bagContainer}>
                    <Image
                        src="/images/bag.svg"
                        alt="Sacola"
                        height={24}
                        width={24}
                    />
                </div>
            </Link>
        </header>
    )
}