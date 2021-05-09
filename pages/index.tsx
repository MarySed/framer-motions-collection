import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Framer Motion Transitions</title>
                <meta
                    name="description"
                    content="Collection of framer motion transitions and animations"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container}>
                <div className={styles.about}>
                    <Link href="/About">
                        <div className={styles['nav-link']}>
                            <a>?</a>
                        </div>
                    </Link>
                </div>
                <h1 className={styles.title}>Framer Motion Transitions</h1>

                <div className={styles.body}>
                    <Link href="/HorizontalTrans">
                        <div className={styles.subtitle}>
                            <a>Horizontal Transition</a>
                        </div>
                    </Link>

                    <Link href="/VerticalTrans">
                        <div className={styles.subtitle}>
                            <a>Vertical Transition</a>
                        </div>
                    </Link>

                    <Link href="/ShrinkTrans">
                        <div className={styles.subtitle}>
                            <a>Shrink Transition</a>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    );
}
