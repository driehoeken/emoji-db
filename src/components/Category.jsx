import { useState } from "react";
import styles from "./category.module.css";
import useFetchData from "../hooks/useFetchData";

const Category = (props) => {
    const [emojis, setEmoji] = useState([]);
    const { category } = props;
    const { data, loading, error } = useFetchData("/category/" + category);
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

    return (
        <>
            <p className={styles.title}>
                <a>{categoryName}</a>
            </p>
            <div className={styles.emojis}>
                {
                    // prettier-ignore
                    (data &&
                    !loading) &&
                    data.slice(0,9).map((emojiData, index) => {
                        return (
                            <div className={styles.emoji} key={index}>
                                <span className={styles["emoji-pic"]}>{String.fromCodePoint(emojiData.unicode[0].replace('U+', '0x'))}</span>
                                <span className={styles["emoji-name"]}>{/*emojiData.name*/}</span>
                            </div>
                        );
                    })
                }
            </div>
            <a>See all 000 emojis!</a>
        </>
    );
};

export default Category;
