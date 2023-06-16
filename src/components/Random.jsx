import styles from "./random.module.css";

const Random = () => {
    return (
        <>
            <p className={styles.title}>
                <a>Random</a>
            </p>
            <div className={styles["random-category-inner"]}>
                <button className={styles["random-button"]}>Try your luck!</button>
                <p>Check what emoji you can get!</p>
            </div>
        </>
    );
};

export default Random;
