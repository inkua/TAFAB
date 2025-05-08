"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';

import ItemEvent from "../inicio/Eventos/components/ItemEvent"
import ItemVideo from "../inicio/Videos/components/ItemVideo";

import 'swiper/css';
import 'swiper/css/navigation';
import ItemArticle from "../ArticlesCarousel/components/ItemArticle";

const Slider = ({ data, type = "events" }) => {

    return (
        <div role="list">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: "auto",
                        spaceBetween: 40,
                    },

                }}
            >
                {
                    type === "events" ?
                        data?.map(item => <SwiperSlide className="carrousel_item" key={item.id}>
                            <ItemEvent key={item.id} data={item} />
                        </SwiperSlide>)
                        :
                        (
                            type === "videos" ?
                                data?.map(item => <SwiperSlide className="carrousel_item" key={item.id}>
                                    <ItemVideo key={item.id} data={item} />
                                </SwiperSlide>)
                                :
                                data?.map(item => <SwiperSlide className="carrousel_item" key={item.id}>
                                    <ItemArticle key={item.id} data={item} />
                                </SwiperSlide>)
                        )
                }
            </Swiper>
        </div>
    )
}

export default Slider
