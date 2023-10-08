import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

interface PortfolioItemProps {
    title: string;
    paragraph: string;
    imagePortfolio: StaticImageData;
    subtitle: string;
    url: string;
}

export const PortfolioItem = ({title, paragraph, imagePortfolio, subtitle, url}: PortfolioItemProps) => {
    return (
        <div className="bg-white mb-5 mt-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center">
                <Image
                    src={imagePortfolio}
                    alt="Imagen de hoja"
                    className="w-full h-auto"
                    style={{
                        width: '100%',
                        height: 'auto%',
                        }}
                />
            </div>
            <div className="ml-8 mr-8 mt-8">
                <h5 className="text-lg">{subtitle}</h5>
                <h3 className="text-2xl mb-6 font-semibold">{title}</h3>
                <p className="text-gray-600 mb-3">{paragraph}</p>
                <button className="flex items-center bg-blue-600 text-white text-blue-500 font-semibold mt-5 px-4 py-2 rounded-md mt-2">
                    <Link className="text-white text-xl" target="_blank" href={url}>Visit site</Link>
                    <FaAngleRight className="mt-1"/>
                </button>             
            </div>
        </div>
    )
}
