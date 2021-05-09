import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './SwipeDown.module.css';

const swipeDownVariants = {
    initial: {
        opacity: 0,
        y: -800,
        transition: {
            duration: 0.8,
            when: 'beforeChildren',
        },
    },

    animate: {
        opacity: 2,
        y: 0,
        transition: {
            duration: 1.2,
            when: 'beforeChildren',
        },
    },

    exit: {
        opacity: 0,
        y: -800,
        transition: {
            duration: 1,
            when: 'afterChildren',
        },
    },
};

const SwipeDown = ({ children }: { children?: ReactNode }) => {
    return (
        <motion.div
            variants={swipeDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.wrapper}
            key={'swipe-transition'}
            onAnimationStart={() => document.body.classList.add('overflow-hidden')}
            onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}>
            {children}
        </motion.div>
    );
};

export default SwipeDown;
