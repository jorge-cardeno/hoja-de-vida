import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const SocialMedia = () => {
    return (
        <div className="pt-20 pl-3 pr-3 bg-white h-screen fixed top-0">
            <h3 className="text-xl text-center font-bold">Links</h3>
            <div className="mt-9 flex flex-col items-center space-y-4">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    <Link className="text-white text-xl" target="_blank" href="https://www.facebook.com/andres.cardenodevia/">
                        <FaFacebookF className="w-11 h-11 text-white text-xl" />
                    </Link>
                </div>
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    <Link className="text-white text-xl" target="_blank" href="https://www.instagram.com/andres.devia/?hl=es">
                        <FaInstagram className="w-11 h-11 text-white text-xl" />
                    </Link>
                </div>
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    <Link className="text-white text-xl" target="_blank" href="https://www.linkedin.com/in/jorge-andres-carde%C3%B1o-devia-620691211/">
                        <FaLinkedinIn className="w-11 h-11 text-white text-xl" />
                    </Link>

                </div>
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    <Link className="text-white text-xl" target="_blank" href="https://github.com/jorge-cardeno">
                        <FaGithub className="w-11 h-11 text-white text-xl" />
                    </Link>

                </div>
            </div>
        </div>
    )
}
