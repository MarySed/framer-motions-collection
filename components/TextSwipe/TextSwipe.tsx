import { motion } from 'framer-motion';
import styles from './TextSwipe.module.css';

// Move the svg rectangle to make the impression of text color sliding in
const textVariants = {
    initial: {
        y: 10,
        transition: {
            duration: 0.2,
        },
    },

    animate: {
        y: 100,
        transition: {
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },

    exit: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

// Container fade in and out
const textContainerVariants = {
    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
    },

    exit: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
            duration: 0.2,
        },
    },
};

const TextSwipe = ({ theme, text }: { theme: string; text: string }) => {
    return (
        <motion.svg className={styles.container} variants={textContainerVariants} key="text-swipe">
            <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width={200}
                height={200}
                className={styles[theme]}>
                <rect className={styles.rect} />
                <motion.rect variants={textVariants} className={styles['motion-rect']} />
            </pattern>
            <text
                className={styles.text}
                textAnchor="middle"
                x="50%"
                y="50%"
                style={{ fill: 'url(#pattern)' }}>
                {text}
            </text>
        </motion.svg>
    );
};

export default TextSwipe;
