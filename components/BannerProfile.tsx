import Image from "next/image";
import imageBanner from "../public/images/andres-cardeno-no-background.png"

export const BannerProfile = () => {
    return (
        <section className="bg-white text-black flex items-center justify-between">
            <div className="ml-10 grid w-3/4">
                <h1 className="text-4xl font-semibold">I am Jorge Andrés Cardeño Devia</h1>
                <span
                    className="text-blue-600 text-4xl font-semibold flex"
                >Full-Stack&nbsp;
                    <p className="text-black">Developer</p>
                </span>
                <p className="w-2/3 mt-5">I am a student in the systems engineering program at the University of Antioquia,
                    passionate about software development. I define myself as someone who enjoys learning
                    new technologies and facing new challenges.
                </p>
                <button
                    className="bg-blue-600 text-white text-blue-500 font-semibold mt-5 px-4 py-2 rounded-md mt-2 w-1/4"
                >
                    Hire Me</button>
            </div>

            <div className="mr-10 flex items-center justify-center">
                <Image
                    src={imageBanner}
                    alt="Imagen de hoja"
                    style={{
                        width: 'auto',
                        height: '100%',
                      }}
                />
            </div>
        </section>
    )
}
