import styles from "./category.module.css";

const Category = (props) => {
    const { category } = props;

    //formatting categoryName
    let categoryName = "";
    category.split("-").forEach((word) => {
        let newWord = "";
        if (word !== "and") {
            newWord = word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
            console.log(newWord);
        } else {
            newWord = "and ";
        }
        categoryName += newWord;
    });
    categoryName = categoryName.slice(0, -1);

    return <div className={styles.category}>{categoryName}</div>;
};

export default Category;
