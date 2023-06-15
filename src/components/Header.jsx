import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>emojidb</div>
                <div className={styles.description}>Simple database of all emojis!</div>
                <div className="search-bar"></div>
            </div>
        </header>
    );
};

export default Header;
