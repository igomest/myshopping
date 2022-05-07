import { useRouter } from "next/router"

import styles from "./styles.module.scss"
import Image from "next/image"

import Link from "next/link"



export function Header() {
    const router = useRouter()

    return (
        <header className={styles.container}>
            {router.pathname === "/" ? (
                <>
                    <div className={styles.logoContainer}>
                        <Image
                            priority
                            src="/images/cart.svg"
                            alt="Logo"
                            height={35}
                            width={35}
                        />
                        <h2 className={styles.title}>MYSHOPPING</h2>
                    </div>

                    <Link href="/favorites">
                        <div className={styles.bagContainer}>
                            <Image
                                priority
                                src="/images/bag.svg"
                                alt="Sacola"
                                height={24}
                                width={24}
                            />
                        </div>
                    </Link>
                </>
            ) : (
                <>
                    <div className={styles.favoriteContainer}>
                        <Image
                            priority
                            src="/images/cart.svg"
                            alt="Logo"
                            height={35}
                            width={35}
                        />
                        <h2>MEUS FAVORITOS</h2>
                    </div>

                    <Link href="/">
                        <div className={styles.bagContainer}>
                            <Image
                                priority
                                src="/images/arrow.svg"
                                alt="Sacola"
                                height={22}
                                width={22}
                            />
                        </div>
                    </Link>
                </>
            )}
        </header>
    )
}