import Image from "next/image";

export const PersonalData = () => {
    return (
        <div className="bg-white p-10">
            <section>
                <div className="flex justify-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                        <Image
                            src="/images/andres-cardeno.png"
                            alt="Imagen de hoja"
                            className="w-full object-cover"
                            width={300} // Ancho deseado en píxeles
                            height={300} // Alto deseado en píxeles
                        />
                    </div>
                </div>
                <div className="text-center mt-5 mb-5">
                    <h2 className="text-xl"><b>Andrés Cardeño Devia</b></h2>
                    <span>Full Stack Developer </span>
                </div>
            </section>
            <hr />
            <section className="mt-5 mb-5">
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
            <section className="mt-5 mb-5">
                <h2 className="text-xl mb-5"><b>Lenguages</b></h2>
                <div className="flex justify-between">
                    <p>Spanish</p>
                    <p>100%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between">
                    <p>English</p>
                    <p>20%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
            </section>
            <hr />
            <section className="mt-5 mb-5">
                <h2 className="text-xl mb-5"><b>Programming Languages</b></h2>
                <div className="flex justify-between">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between">
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between">
                    <p>JavaScript</p>
                    <p>80%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between">
                    <p>Node</p>
                    <p>70%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between">
                    <p>WordPress</p>
                    <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </section>
            <hr />
            <section className="mt-5">
                <div className="grid">
                    <h2 className="text-xl mb-5"><b>Extra Skills</b></h2>
                    <span>Boostrap, Material UI</span>
                    <span>React, Vue</span>
                    <span>Node, Meteor</span>
                    <span>Git, Scrum</span>
                </div>
            </section>

        </div>
    )
};
