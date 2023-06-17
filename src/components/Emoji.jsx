import styles from "./emoji.module.css";

const Emoji = (props) => {
    const { emojiData } = props;
    return (
        <div className={styles.emoji}>
            <span className={styles["emoji-pic"]}>
                {String.fromCodePoint(emojiData.unicode[0].replace("U+", "0x"))}
            </span>
            <span className={styles["emoji-name"]}>{emojiData.name}</span>
        </div>
    );
};

export default Emoji;
