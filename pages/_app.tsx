import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

const globalVariants = {
    initial: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    },

    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },

    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {/* TODO: Consider removing. */}
            <motion.div
                key={router.route}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={globalVariants}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
};

export default MyApp;
