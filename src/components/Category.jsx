import styles from "./category.module.css";

const Category = (props) => {
    const { category } = props;

    //formatting categoryName
    let categoryName = "";
    category.split("-").forEach((word) => {
        let newWord = "";
        if (word !== "and") {
            newWord = word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
        } else {
            newWord = "and ";
        }
        categoryName += newWord;
    });
    categoryName = categoryName.slice(0, -1);

    const emojis = [
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
        {
            name: "red heart",
            emoji: "❤️",
        },
    ];
    return (
        <div className={styles.category}>
            <p className={styles.title}>
                <a>{categoryName}</a>
            </p>
            {category !== "random" ? (
                //if it is not random category
                <div className={styles.emojis}>
                    {emojis.map((emojiData, index) => {
                        return (
                            <div className={styles.emoji} key={index}>
                                <span className={styles["emoji-pic"]}>{emojiData.emoji}</span>
                                <span className={styles["emoji-name"]}>{emojiData.name}</span>
                            </div>
                        );
                    })}
                </div>
            ) : (
                //if it is a random category
                <div className={styles["random-category-inner"]}>
                    <button className={styles["random-button"]}>Try your luck!</button>
                    <p>Check what emoji you can get!</p>
                </div>
            )}
        </div>
    );
};

export default Category;
