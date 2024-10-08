import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const ProfileSection = () => {


    const { translations } = useContext(LanguageContext);
    return (
        <div className=" h-[104px] w-[1140px] mx-auto mb-[130px]">
            <h1 className="text-5xl text-[#1F2937]
            dark:text-5xl  h-[64px] w-[1140px] ">{translations.headingProfile}</h1>

            <div className=" flex justify-center  gap-0">
                <div className="w-[1140px] ">
                    <h2 className="text-[30px] text-[#4338CA]
            dark:text-5xl h-[40px]">{translations.ProfileH1}</h2>

                    <div className=" w-[300px] flex justify-center ">

                        <div className="w-[150px] text-[18px] mt-5 ">
                            <p className="text-[12px] text-[#000000] font-[600]
            dark:text-5xl h-[36px]">{translations.ProfileP1}</p>
                            <p className="text-[12px] text-[#000000] font-[600]
            dark:text-5xl h-[36px]">{translations.ProfileP2}</p>
                            <p className="text-[12px] text-[#000000] font-[600]
            dark:text-5xl h-[36px]">{translations.ProfileP3}</p>
                            <p className="text-[12px] text-[#000000] font-[600]
            dark:text-5xl h-[36px]">{translations.ProfileP4}</p>

                        </div>

                        <div className="w-[150px] text-[18px] mt-5 ml-0 ">
                            <p className="text-[12px] text-[#000000]
            dark:text-5xl h-[36px]">{translations.ProfileP5}</p>
                            <p className="text-[12px] text-[#000000]
            dark:text-5xl h-[36px]">{translations.ProfileP6}</p>
                            <p className="text-[12px] text-[#000000]
            dark:text-5xl h-[36px]">{translations.ProfileP7}</p>
                            <p className="text-[12px] text-[#000000]
            dark:text-5xl h-[36px]">{translations.ProfileP8}</p>

                        </div>

                    </div>
                </div>


                <div className="">
                    <h2 className="text-[30px] text-[#4338CA]
            dark:text-5xl h-[56px]">{translations.ProfileH2}</h2>
                    <p className="text-[12px] text-[#6B7280]
            dark:text-5xl h-[56px]">{translations.ProfileP9}</p>

                </div>

            </div>
            <div className=" border-t border-[#BAB2E7] border-[1px] my-4"></div>

        </div>


    );
}

export default ProfileSection