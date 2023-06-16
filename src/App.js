import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import Random from "./components/Random";
import Card from "./components/Card";
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
                <div className="main-inner">
                    {categories.map((category, index) => {
                        return (
                            <Card>
                                <Category key={index} category={category} />
                            </Card>
                        );
                    })}
                    <Card>
                        <Random />
                    </Card>
                </div>
            </main>
        </>
    );
}

export default App;
