import { useLoaderData, useParams } from "react-router-dom";

const HouseDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)

    const detail = details.find(detail => detail.id === idInt);
    console.log(detail)

    return (
        <div className="max-w-8xl mx-auto ml-5 pt-24">

            <div className="max-w-full p-4 shadow-md  glass dark:text-white-800 mt-3 rounded-lg pb-10 ">
                <div className="space-y-4 animate__animated animate__fadeIn ">
                    <div className="space-y-2">
                        <img src={detail.image} alt="" className="block object-cover object-center w-full  rounded-md max-h-96 dark:bg-gray-500" />
                        <h2 className='font-bold'>{detail.estate_title}</h2>
                    </div>
                    <div className='flipInX space-y-3 text-xl text-gray-300 '>
                        <div>
                            {
                                detail.facilities.map((hash, index) => <span key={index} className='mr-3'><a href="">#{hash}</a></span>)
                            }
                        </div>
                        <div className='flex justify-between ani'>
                            <p>{detail.segment_name} </p>
                            <p>{detail.status} </p>
                        </div>
                        <div className='flex justify-between pb-5'>
                            <p>{detail.price} </p>
                            <p>{detail.area} </p>
                        </div>
                        <div>
                            <p className="text-center">{detail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HouseDetails;