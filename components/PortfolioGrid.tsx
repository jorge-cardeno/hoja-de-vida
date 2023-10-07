import { PortfolioItem } from "./PortfolioItem"

export const PortfolioGrid = () => {
    return (
        <div className="flex w-[1200px] mt-10 overflow-x-auto">
            <div className="flex gap-6">
                <div className="">
                    <PortfolioItem />
                </div>
                <div className="">
                    <PortfolioItem />
                </div>
                <div className="">
                    <PortfolioItem />
                </div>
                <div className="">
                    <PortfolioItem />
                </div>
            </div>
        </div>
    )
}
