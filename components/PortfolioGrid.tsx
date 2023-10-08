import { PortfolioItem } from "./PortfolioItem";
import imageOkorum from "../public/images/okorum-portfolio.jpg";
import imageBeLeaf from "../public/images/be-leaf-portfolio.jpg";
import imageMoversReport from "../public/images/movers-report-portfolio.jpg";
import imageAllClean from "../public/images/all-clean-portfolio.jpg";
import imageOrtotex from "../public/images/ortotex-portfolio.jpg";
import imageGrowingHealth from "../public/images/growing-health-portfolio.jpg";

export const PortfolioGrid = () => {
    return (
        <div className="flex w-[900px] mt-10 mx-auto justify-center mb-10">
            <div className="flex overflow-x-auto">
                <div className="flex gap-6">
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="Okorum"
                            subtitle="Full-Stack Developer"
                            imagePortfolio={imageOkorum}
                            paragraph="Currently, I am a member of the Okorum team as a Full Stack developer,
                            a company dedicated to software development in the healthcare sector."
                            url="https://www.okorum.com/"
                        />
                    </div>
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="Be Leaf Agency"
                            subtitle="Co-founder"
                            imagePortfolio={imageBeLeaf}
                            paragraph="I am the co-founder of Be Leaf, a marketing company with more than 7 years
                            of experience in the industry and more than 70 projects completed."
                            url="https://beleafdesign.co/"
                        />
                    </div>
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="Movers Report"
                            subtitle="WordPress Developer"
                            imagePortfolio={imageMoversReport}
                            paragraph="I worked at the American company as a WordPress developer, where my main
                            task was to provide maintenance for a specialized moving website."
                            url="https://moversreport.com/"
                        />
                    </div>
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="All Clean"
                            subtitle="Freelance"
                            imagePortfolio={imageAllClean}
                            paragraph="I developed a website as a freelancer for All Clean, a company dedicated
                            to the sale of original clothing imported from the United States."
                            url="https://allcleanmedellin.com.co/"
                        />
                    </div>
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="Ortotex"
                            subtitle="Freelance"
                            imagePortfolio={imageOrtotex}
                            paragraph="I developed a website as a freelancer for Ortotex, a company located in
                            the city of Medellin specialized in the sale of orthopedic products."
                            url="https://ortotex.com/"
                        />
                    </div>
                    <div className="bg-white rounded-lg w-80 shadow-lg">
                        <PortfolioItem
                            title="Growing Health"
                            subtitle="Freelance"
                            imagePortfolio={imageGrowingHealth}
                            paragraph="Freelancer for Growing Health, a Uruguayan company dedicated to the sale of
                            raw materials for products made with medical marijuana."
                            url="https://growinghealthuy.com/"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
