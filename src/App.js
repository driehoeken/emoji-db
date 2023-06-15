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
        "random",
    ];
    return (
        <>
            <Header />
            <main>
                <div className="main-inner">
                    {categories.map((category) => {
                        return <Category category={category} />;
                    })}
                </div>
            </main>
        </>
    );
}

export default App;
