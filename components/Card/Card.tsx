import styles from './Card.module.css';

const Card = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <div>{description}</div>
        </div>
    );
};

export default Card;
