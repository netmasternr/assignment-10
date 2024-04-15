import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper/modules';
import { EffectFade,  } from 'swiper/modules';



import home1 from '../../assets/image/img5.jpg';
import home2 from '../../assets/image/pexels-binyamin-mellish-186077.jpg';
import home3 from '../../assets/image/pexels-expect-best-323780.jpg';
import home4 from '../../assets/image/pexels-expect-best-323780.jpg';



const Slider = () => {
    return (
        <div className=''>
                <Swiper
                   modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, ]}
                    effect="fade"
                   spaceBetween={50}
                   slidesPerView={1}
                   navigation
                   pagination={{ clickable: true }}
                   scrollbar={{ draggable: true }}

                >
                    <SwiperSlide><img className='rounded-lg' src={home1}  alt="" /></SwiperSlide>
                   
                    <SwiperSlide><img className='rounded-lg' src={home2}  alt=""/></SwiperSlide>
                   
                    <SwiperSlide><img className='rounded-lg' src={home3}  alt="" style={{width: "100%"}}/></SwiperSlide>
                   
                    <SwiperSlide><img className='rounded-lg' src={home4}  alt="" style={{width: "100%"}}/></SwiperSlide>
                </Swiper>
            </div>
    );
};

export default Slider;