import SearchBar from "./SearchBar";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>emojidb</div>
                <div className={styles.description}>Simple database of all emojis!</div>
                <SearchBar />
            </div>
        </header>
    );
};

export default Header;
