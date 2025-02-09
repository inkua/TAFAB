"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carrusel = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' paginationDots"> <span></span></span>';
        },
    };

    return (
        <div className=''>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper h-[347px] md:!h-[480px] xl:!h-[510px]"
            >
                <SwiperSlide className='!h-[306px] md:!h-[420px] xl:!h-[450px] bg-blue-100 bg-denunciaMobile md:bg-denunciaWeb bg-left bg-no-repeat bg-cover'>

                </SwiperSlide>

                <SwiperSlide className='!h-[306px] md:!h-[420px] xl:!h-[450px] bg-blue-200'>
                </SwiperSlide>

                <SwiperSlide className='!h-[306px] md:!h-[420px] xl:!h-[450px] bg-blue-300'>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carrusel
