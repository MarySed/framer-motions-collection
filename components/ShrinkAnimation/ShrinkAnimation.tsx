import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './ShrinkAnimation.module.css';

const backgroundVariants = {
    initial: {
        height: '100%',
        bottom: 0,
    },

    animate: {
        height: 0,
        opacity: 0,
        transition: {
            when: 'afterChildren',
            duration: 1,
            ease: [0.8, 0, 0.15, 1],
        },
    },

    exit: {
        height: '100%',
        bottom: 0,
        transition: {
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const ShrinkAnimation = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            className={styles.background}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationStart={() => document.body.classList.add('overflow-hidden')}
            onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}>
            {children}
        </motion.div>
    );
};

export default ShrinkAnimation;
