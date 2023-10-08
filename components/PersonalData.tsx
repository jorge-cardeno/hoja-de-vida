import Image from "next/image";
import { FaMinus } from 'react-icons/fa';

export const PersonalData = () => {
    return (
        <div className="bg-white pl-20 pr-20 pt-2 h-screen fixed top-0 bg-white">
            <section>
                <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                        <Image
                            src="/images/andres-cardeno.png"
                            alt="Imagen de hoja"
                            className="w-full object-cover"
                            width={300} // Ancho deseado en píxeles
                            height={300} // Alto deseado en píxeles
                        />
                    </div>
                </div>
                <div className="text-center mt-2 mb-2">
                    <h2 className="text-lg"><b>Andrés Cardeño Devia</b></h2>
                    <span className="text-sm">Full Stack Developer </span>
                </div>
            </section>
            <hr />
            <section className="mt-2 mb-2 text-xs">
                <div className="flex justify-between">
                    <p>Age:</p>
                    <p>25</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p>Residence:</p>
                    <p>Calle 47 #100-56</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p>Email:</p>
                    <p>jorge.cardeno@udea.edu.co</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p>Cell phone:</p>
                    <p>322 349 25 81</p>
                </div>
            </section>
            <hr />
            <section className="mt-2 mb-2">
                <h2 className="text-sm mb-2"><b>Lenguages</b></h2>
                <div className="flex justify-between text-xs">
                    <p>Spanish</p>
                    <p>100%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-2">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                    <p>English</p>
                    <p>20%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '20%' }}></div>
                </div>
            </section>
            <hr />
            <section className="mt-2 mb-2">
                <h2 className="text-sm mb-2"><b>Programming Languages</b></h2>
                <div className="flex justify-between text-xs">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-1 mb-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1 mb-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                    <p>JavaScript</p>
                    <p>80%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1 mb-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                    <p>Node</p>
                    <p>70%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1 mb-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                    <p>WordPress</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1 mb-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </section>
            <hr />
            <section className="mt-2">
                <div className="grid">
                    <h2 className="text-sm mb-2"><b>Extra Skills</b></h2>
                    <div className="flex items-center text-xs">
                        <FaMinus className="mr-1"/>
                        <span>Boostrap, Material UI</span>
                    </div>
                    <div className="flex items-center text-xs">
                        <FaMinus className="mr-1"/>
                        <span>React, Vue</span>
                    </div>
                    <div className="flex items-center text-xs">
                        <FaMinus className="mr-1"/>
                        <span>Node, Meteor</span>
                    </div>
                    <div className="flex items-center text-xs">
                        <FaMinus className="mr-1"/>
                        <span>Git, Scrum</span>
                    </div>  
                </div>
            </section>

        </div>
    )
};
