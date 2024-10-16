import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const SkillsSection = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div id="skills-section" className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:py-[20px] dark:pb-[10px] transition-colors duration-300">
                <h1 className="text-5xl text-[#1F2937] h-[64px] dark:text-[#AEBCCF]">
                    {translations.headingSkills}
                </h1>

                <div className="flex flex-col md:flex-row md:my-0  justify-center gap-[120px] dark:bg-gray-900 dark:pb-[30px]">
                    <div>
                        <h2 className="text-[30px] text-[#4338CA]  h-[56px] dark:text-[#B7AAFF]">
                            {translations.SkillsH1}
                        </h2>
                        <p className="text-[12px] text-[#6B7280] md:m-1px h-[56px] dark:text-[#FFFFFF]">
                            {translations.SkillsP1}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[30px] text-[#4338CA] h-[56px] dark:text-[#B7AAFF]">
                            {translations.SKillsH2}
                        </h2>
                        <p className="text-[12px] text-[#6B7280] h-[56px] dark:text-[#FFFFFF]">
                            {translations.SKillsP2}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[30px] text-[#4338CA] h-[56px] dark:text-[#B7AAFF]">
                            {translations.SkillsH3}
                        </h2>
                        <p className="text-[12px] text-[#6B7280] h-[56px] dark:text-[#FFFFFF]">
                            {translations.SkillsP3}
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#BAB2E7] border-[1px] my-4 dark:my-0"></div>
            </div>
        </div>
    );
}

export default SkillsSection;
