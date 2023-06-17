import { useState } from "react";
import styles from "./category.module.css";
import useFetchData from "../hooks/useFetchData";
import Emoji from "./Emoji";

const Category = (props) => {
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
                    (data && !loading) &&
                    data.slice(0,9).map((emojiData, index) => {
                        return (
                            <Emoji emojiData={emojiData} key={index}/>
                        );
                    })
                }
            </div>
            <a>See all 000 emojis!</a>
        </>
    );
};

export default Category;
