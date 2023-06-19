import styles from "./searchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles["outer-container"]}>
            <div className={styles.container}>
                <form>
                    <input
                        type="text"
                        placeholder="Search emojis..."
                        name="q"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        S
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
