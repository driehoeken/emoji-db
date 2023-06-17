import styles from "./emoji.module.css";

const Emoji = (props) => {
    const { emojiData } = props;

    const renderName = (name) => {
        let output = name;
        if (name.includes("≊")) {
            output = name.substring(0, name.indexOf("≊"));
        }
        return output;
    };
    return (
        <div className={styles.emoji}>
            <span className={styles["emoji-pic"]}>
                {String.fromCodePoint(emojiData.unicode[0].replace("U+", "0x"))}
            </span>
            <span className={styles["emoji-name"]}>{renderName(emojiData.name)}</span>
        </div>
    );
};

export default Emoji;
