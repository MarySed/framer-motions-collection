import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <>
            <Head>
                <title>About - Framer Motion Transitions</title>
                <meta
                    name="description"
                    content="Collection of framer motion transitions and animations"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <h1 className={styles.title}>About</h1>
                <div className={styles.description}>
                    <p>
                        Wanted to create a small collection of framer motion animations and page
                        transitions as I learn how to use it.
                    </p>

                    <p>Expect infrequent updates as I mess around</p>
                </div>
            </Layout>
        </>
    );
};

export default About;
