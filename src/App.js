import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
    const categories = [
        "smileys-and-people",
        "animals-and-nature",
        "food-and-drink",
        "travel-and-places",
        "activities",
        "objects",
        "symbols",
        "flags",
    ];
    return (
        <>
            <Header />
            <main>
                {categories.map((category) => {
                    return <Category category={category} />;
                })}
            </main>
        </>
    );
}

export default App;
