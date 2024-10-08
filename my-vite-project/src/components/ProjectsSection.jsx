import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import pizzaPro from '../assets/pizza-pro.png';
import grid from '../assets/grid.png';

const ProjectSection = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">

            <div className=" w-[1140px] mx-auto dark:bg-gray-900 dark:py-[20px] dark:pb-[100px] transition-colors duration-300 pb-[100px]">
                <h1 className="text-5xl text-[#1F2937] h-[64px] w-[1140px] dark:text-[#AEBCCF]">
                    {translations.headingPro}
                </h1>

                <div className="h-[449px] flex justify-center gap-[120px] dark:bg-gray-900 dark:pb-[30px]">
                    <div className="w-[300px] flex flex-col justify-between">

                        <div>
                            <img src={grid} className="w-[300px] h-[180px]" />
                            <h2 className="text-[30px] text-[#4338CA] h-[56px] dark:text-[#B7AAFF]">
                                {translations.ProH1}
                            </h2>
                            <p className="text-[12px] mb-5 text-[#6B7280] h-[56px] dark:text-[#FFFFFF]">
                                {translations.ProP1}
                            </p>
                        </div>


                        <div className="flex space-x-2 mt-20">
                            <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                {translations.ProBtn1}
                            </button>

                            <a href="https://github.com/ozgecanodemis">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn2}
                                </button>
                            </a>

                            <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn3}
                                </button>
                            </a>
                        </div>

                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav1}
                            </a>
                            <a href="https://fs-web-s9-sprint-challenge-solution-hk4r.vercel.app/" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav2}
                            </a>
                        </nav>

                    </div>

                    <div className="w-[300px] flex flex-col justify-between">

                        <div>
                            <img src={pizzaPro} className="w-[300px] h-[180px]" />
                            <h2 className="text-[30px] text-[#4338CA] h-[56px] dark:text-[#B7AAFF]">
                                {translations.ProH2}
                            </h2>
                            <p className="text-[12px] mb-5 text-[#6B7280] h-[56px] dark:text-[#FFFFFF]">
                                {translations.ProP1}
                            </p>
                        </div>


                        <div className="flex space-x-2 mt-20">
                            <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                {translations.ProBtn1}
                            </button>

                            <a href="https://github.com/ozgecanodemis">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn2}
                                </button>
                            </a>

                            <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn3}
                                </button>
                            </a>
                        </div>

                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis/fsweb-s8-challenge-pizza" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">{translations.nav1}</a>
                            <a href="#" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">{translations.nav2}</a>
                        </nav>

                    </div>

                    <div className="w-[300px] flex flex-col justify-between">

                        <div>
                            <img src="https://picsum.photos/id/20/367/267" className="w-[300px] h-[180px]" />
                            <h2 className="text-[30px] text-[#4338CA] h-[56px] dark:text-[#B7AAFF]">
                                {translations.ProH3}
                            </h2>
                            <p className="text-[12px] mb-5 text-[#6B7280] h-[56px] dark:text-[#FFFFFF]">
                                {translations.ProP1}
                            </p>
                        </div>


                        <div className="flex space-x-2 mt-20">
                            <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                {translations.ProBtn1}
                            </button>

                            <a href="https://github.com/ozgecanodemis">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn2}
                                </button>
                            </a>

                            <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a">
                                <button className="w-[68px] h-[27px] border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#B7AAFF] transition flex items-center justify-center">
                                    {translations.ProBtn3}
                                </button>
                            </a>
                        </div>
                        <nav className="flex justify-between mt-4 gap-x-6">
                            <a href="https://github.com/ozgecanodemis" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
                                {translations.nav1}
                            </a>
                            <a href="https://fsweb-s10g2-redux-filmler-solution-deploy.vercel.app/movies" className="underline underline-offset-4 text-[#3730A3] dark:text-[#E1E1FF]">
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
