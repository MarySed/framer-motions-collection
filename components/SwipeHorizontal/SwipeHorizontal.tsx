import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './SwipeHorizontal.module.css';

const swipeHorizontalVariants = {
    initial: {
        opacity: 0,
        x: '-150%',
        transition: {
            duration: 1.5,
            delay: 0.5,
            when: 'beforeChildren',
        },
    },

    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            when: 'beforeChildren',
        },
    },

    exit: {
        opacity: 0,
        x: -800,
        transition: {
            duration: 1,
            when: 'afterChildren',
        },
    },
};

const SwipeHorizontal = ({ children }: { children?: ReactNode }) => {
    return (
        <motion.div
            key="swipe-horizontal"
            variants={swipeHorizontalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.wrapper}
            onAnimationStart={() => document.body.classList.add('overflow-hidden')}
            onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}>
            {children}
        </motion.div>
    );
};

export default SwipeHorizontal;
