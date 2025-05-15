import { dateFormatedFrontend } from '@/utils/getDate';
import Image from 'next/image';
import Link from 'next/link';

const ItemEvent = ({data}) => {
    return (
        <div
            className="w-full min-w-[255px] max-w-[293px] md:w-1/2 mb-2 flex flex-col lg:flex-row lg:items-center lg:min-w-[637px]"
            role="listitem"
        >
            <Image
                className="aspect-square w-full lg:w-[220px] object-cover"
                src={data?.imgUrl|| "/defaultVideo.webp"}
                alt="Imagen del evento"
                width={300}
                height={300}
            />

            <div className="w-full mt-3 lg:p-10 lg:mt-0">
                <span className="font-light text-xs">{dateFormatedFrontend(data?.date)}</span>
                <h3 className="font-bold text-xl uppercase leading-7 mt-1">
                    {data?.title}
                </h3>
                <p className="mt-1 h-auto text-sm">
                    {data?.info}
                </p>
                {data?.url&&
                    <Link
                        className="font-bold underline mt-4 text-sm hover:text-btn-purple"
                        href={data?.url}
                        alt="Leer más"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Leer más
                    </Link>
                }
            </div>
        </div>
    );
};

export default ItemEvent;