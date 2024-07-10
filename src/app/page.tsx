import Image from "next/image";
import styles from "./page.module.css";
import logo from "./LogoPortfolio.png"

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Welcome to my personal
                    <code className={styles.code}> portfolio</code>
                </p>
                <div>
                    <span>
                        Arthur Lisboa
                    </span>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt="Arthur's Logo"
                    width={200}
                    height={200}
                    priority
                />
            </div>

            <div className={styles.grid}>
                <a
                    className={styles.card}
                >
                    <h2>
                        About <span>-&gt;</span>
                    </h2>
                    <p>Find more about myself and who i am.</p>
                </a>

                <a
                    className={styles.card}
                >
                    <h2>
                        Experience <span>-&gt;</span>
                    </h2>
                    <p>Here are some of the places that i have worked.</p>
                </a>

                <a
                    className={styles.card}
                >
                    <h2>
                        Projects <span>-&gt;</span>
                    </h2>
                    <p>Checkout some of my personal projects.</p>
                </a>

                <a
                    className={styles.card}
                >
                    <h2>
                        Social <span>-&gt;</span>
                    </h2>
                    <p>
                        Fell free to check, contact or follow me in my social medias.
                    </p>
                </a>
            </div>
        </main>
    );
}
