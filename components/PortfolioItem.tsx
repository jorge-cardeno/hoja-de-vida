import Image from "next/image";
import Link from 'next/link'
import imagePortfolio from "../public/images/okorum-portfolio.jpg"

export const PortfolioItem = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center">
                <Image
                    src={imagePortfolio}
                    alt="Imagen de hoja"
                    className="w-full h-auto rounded-t-xl"
                    style={{
                        width: '100%',
                        height: 'auto%',
                        }}
                />
            </div>
            <div className="ml-8 mr-8 mt-8">
                <h3 className="from-neutral-50 text-2xl mb-6">Full-Stack Developer</h3>
                <p className="text-gray-600">
                    I am currently part of the Okorum team as a Full Stack,
                    where I deploy my experience and passion for web development to create
                    comprehensive and efficient solutions
                </p>
                <Link target="_blank" href="https://www.okorum.com/">Visit site</Link>
            </div>
        </div>
    )
}
