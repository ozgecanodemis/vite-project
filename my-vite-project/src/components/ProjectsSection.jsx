import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import pizzaPro from '../assets/pizza-pro.png';
import grid from '../assets/grid.png';

const ProjectSection = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-12">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl text-[#1F2937] dark:text-[#AEBCCF] mb-8">
                    {translations.headingPro}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* First Project */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <img src={grid} className="w-full h-48 object-cover" />
                            <h2 className="text-2xl sm:text-3xl text-[#4338CA] dark:text-[#B7AAFF] mt-4">
                                {translations.ProH1}
                            </h2>
                            <p className="text-sm text-[#6B7280] dark:text-white mt-2">
                                {translations.ProP1}
                            </p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn1}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn2}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn3}
                            </button>
                        </div>
                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis/FSWeb-S9-Sprint-Challenge-solution" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav1}
                            </a>
                            <a href="https://fs-web-s9-sprint-challenge-solution-hk4r.vercel.app/" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav2}
                            </a>
                        </nav>
                    </div>

                    {/* Second Project */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <img src={pizzaPro} className="w-full h-48 object-cover" />
                            <h2 className="text-2xl sm:text-3xl text-[#4338CA] dark:text-[#B7AAFF] mt-4">
                                {translations.ProH2}
                            </h2>
                            <p className="text-sm text-[#6B7280] dark:text-white mt-2">
                                {translations.ProP1}
                            </p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn1}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn2}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn3}
                            </button>
                        </div>
                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis/fsweb-s8-challenge-pizza" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav1}
                            </a>
                            <a href="https://fsweb-s8-challenge-pizza-hrtids6qb-ozgecans-projects.vercel.app/" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav2}
                            </a>
                        </nav>
                    </div>

                    {/* Third Project */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <img src="https://picsum.photos/id/20/367/267" className="w-full h-48 object-cover" />
                            <h2 className="text-2xl sm:text-3xl text-[#4338CA] dark:text-[#B7AAFF] mt-4">
                                {translations.ProH3}
                            </h2>
                            <p className="text-sm text-[#6B7280] dark:text-white mt-2">
                                {translations.ProP1}
                            </p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn1}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn2}
                            </button>
                            <button className="px-4 py-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition">
                                {translations.ProBtn3}
                            </button>
                        </div>
                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis/fsweb-s10g2-redux-filmler-solution" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav1}
                            </a>
                            <a href="https://fsweb-s10g2-redux-filmler-solution-deploy-o755fe2ri.vercel.app" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav2}
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
