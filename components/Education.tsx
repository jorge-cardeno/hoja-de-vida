interface EducationProps {
    title: string;
    role: string;
    date: string;
    degree:string;
    paragraph: string;
}
export const Education = ({title, role, date, degree, paragraph}: EducationProps) => {
    return (
        <div className="flex mb-8 bg-white rounded-lg mt-10 p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="p-4 mr-6 w-1/2">
                <h3 className="from-neutral-50 text-xl ml-3">{title}</h3>
                <div className="p-3 mr-8">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">{role}</span>
                        <span
                            className="rounded text-sm bg-blue-600 text-white px-2 py-1 w-2/3 text-center">
                            {date}
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full mt-2">
                <h4 className="from-neutral-50 text-xl mb-6">{degree}</h4>
                <p className="text-gray-700 mr-5">{paragraph}</p>
            </div>
        </div>
    )
}
