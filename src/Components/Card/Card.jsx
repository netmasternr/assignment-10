import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import 'animate.css/animate.min.css';


const Card = ({ card }) => {

    const { estate_title, segment_name, price, status, area, image, description, facilities } = card;



    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 ">

            <div className="space-y-4 animate__animated animate__fadeIn ">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <h2 className='font-bold'>{estate_title}</h2>
                </div>

                <div className='flipInX space-y-3 text-xl text-black font-semibold'>
                    <div>
                        {
                            facilities.map((hash, index) => <span key={index} className='mr-3'><a href="">#{hash}</a></span>)
                        }
                    </div>

                    <div className='flex justify-between ani'>
                        <p>{segment_name} </p>
                        <p>{status} </p>
                    </div>

                    <div className='flex justify-between'>
                        <p>{price} </p>
                        <p>{area} </p>
                    </div>
                    <div className="space-y-2">

                        <p className="leading-snug dark:text-gray-600">{description}</p>
                    </div>

                </div>
                <div>
                    <NavLink><button className='btn btn-primary'>View Details</button></NavLink>
                </div>
            </div>
        </div>


    );


    Card.propTypes = {
        card: PropTypes.object,
    }

};

export default Card;