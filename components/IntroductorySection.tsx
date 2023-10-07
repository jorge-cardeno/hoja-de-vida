interface IntroductorySectionProps {
    title: string;
    paragraph: string;
  }
export const IntroductorySection = ({title, paragraph}: IntroductorySectionProps) => {
    return (
        <div className="text-center pl-40 pr-40 mt-10">
            <h1 className="text-3xl font-semibold mb-4">{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}
