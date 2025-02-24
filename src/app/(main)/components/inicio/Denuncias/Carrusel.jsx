"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

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
                    <div className='w-full h-full flex justify-center items-end md:justify-start'>
                        <Link
                            href="https://nomasdiscriminacion.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-[#FABF74] text-[#484848] md:text-lg xl:text-xl py-3  xl:py-5 px-11 md:px-14 xl:px-20 font-semibold mb-7 md:mb-12 md:ml-44 hover:bg-btn-purple hover:text-white'
                        >
                            Haz clic para denunciar
                        </Link>

                    </div>
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
