import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Card from "../../Components/Card/Card";
import Tittle from "../../Components/Tittle/Tittle";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {

    const cards = useLoaderData();
    console.log(cards)

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>

            <div className="text-center my-4">
                <Tittle></Tittle>
            </div>
            {/* cards container */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default HomePage;