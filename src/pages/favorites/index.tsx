import Image from "next/image"
import styles from "./styles.module.scss"


export default function Favorites() {
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <Image
                                priority
                                src="/images/terno.jpg"
                                alt="Terno"
                                width={100}
                                height={110}
                            />
                        </td>
                        <td>Terno Xadrez</td>
                        <td>R$400</td>
                        <td>
                            <button type="button">X</button>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <Image
                                priority
                                src="/images/terno.jpg"
                                alt="Terno"
                                width={100}
                                height={110}
                            />
                        </td>
                        <td>Terno Xadrez</td>
                        <td>R$400</td>
                        <td>
                            <button type="button">X</button>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <Image
                                priority
                                src="/images/terno.jpg"
                                alt="Terno"
                                width={100}
                                height={110}
                            />
                        </td>
                        <td>Terno Xadrez</td>
                        <td>R$400</td>
                        <td>
                            <button type="button">X</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Image
                                priority
                                src="/images/terno.jpg"
                                alt="Terno"
                                width={100}
                                height={110}
                            />
                        </td>
                        <td>Terno Xadrez</td>
                        <td>R$400</td>
                        <td>
                            <button type="button">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}