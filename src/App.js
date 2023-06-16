import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import useFetchData from "./hooks/useFetchData";

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
    useFetchData("/all");
    return (
        <>
            <Header />
            <main>
                <div className="main-inner">
                    {categories.map((category, index) => {
                        return <Category key={index} category={category} />;
                    })}
                </div>
            </main>
        </>
    );
}

export default App;
