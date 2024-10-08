import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const SkillsSection = () => {


    const { translations } = useContext(LanguageContext);
    return (
        <div className="h-[104px] w-[1140px] mx-auto mb-[130px]">
            <h1 className="text-5xl text-[#1F2937]
            dark:text-5xl  h-[64px] w-[1140px] ">{translations.headingSkills}</h1>

            <div className=" flex justify-center gap-[120px]">
                <div >
                    <h2 className="text-[30px] text-[#4338CA]
            dark:text-5xl h-[56px]">{translations.SkillsH1}</h2>
                    <p className="text-[12px] text-[#6B7280]
            dark:text-5xl h-[56px]">{translations.SkillsP1}</p>
                </div>

                <div>
                    <h2 className="text-[30px] text-[#4338CA]
                    dark:text-5xl h-[56px]">{translations.SKillsH2}</h2>
                    <p className="text-[12px] text-[#6B7280]
            dark:text-5xl h-[56px]">{translations.SKillsP2}</p>

                </div>

                <div>
                    <h2 className="text-[30px] text-[#4338CA]
            dark:text-5xl h-[56px]">{translations.SkillsH3}</h2>
                    <p className="text-[12px] text-[#6B7280]
            dark:text-5xl h-[56px]">{translations.SkillsP3}</p>

                </div>

            </div>
            <div className=" border-t border-[#BAB2E7] border-[1px] my-4"></div>

        </div>


    );
}

export default SkillsSection