import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
    const { translations } = useContext(LanguageContext);
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] transition-colors duration-300 h-auto md:h-[409px] py-8">
            <div className="mx-auto w-full max-w-[1140px] px-4 bg-[#F9F9F9] dark:bg-[#141414] dark:py-[20px] dark:pb-[10px] transition-colors duration-300">
                <h1 className="text-[28px] md:text-[42px] text-[#1F2937] dark:text-[#AEBCCF] mb-4 md:mb-0">
                    {translations.footerH1}
                </h1>

                <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-[100px] gap-y-4 md:gap-x-96">
                    <a
                        href="https://fsweb-s10g2-redux-filmler-solution-deploy.vercel.app/movies"
                        className="underline underline-offset-4 text-[#AF0C48] dark:text-[#E1E1FF] text-[16px] md:text-[20px] w-auto md:w-[297px]"
                    >
                        👉 {translations.mail}
                    </a>

                    <nav className="flex justify-between gap-x-4 md:gap-x-6 w-full md:w-[297px]">
                        <a href="https://github.com/ozgecanodemis" className="text-[#0A0A14] dark:text-[#E1E1FF] text-[16px] md:text-[18px]">
                            {translations.navigator1}
                        </a>
                        <a href="https://github.com/ozgecanodemis" className="text-[#00AB6B] text-[16px] md:text-[18px]">
                            {translations.navigator2}
                        </a>
                        <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a/" className="text-[#0077B5] text-[16px] md:text-[18px]">
                            {translations.navigator3}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;
