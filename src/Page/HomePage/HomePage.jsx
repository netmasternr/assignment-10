import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Card from "../../Components/Card/Card";

const HomePage = () => {

    const cards = useLoaderData();
    console.log(cards)
    
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>

            {/* cards container */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default HomePage;