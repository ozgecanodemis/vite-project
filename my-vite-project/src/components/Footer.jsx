import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {


    const { translations } = useContext(LanguageContext);
    return (
        <div className=" bg-[#F9F9F9] dark:bg-[#141414] transition-colors duration-300 h-[409px]">

            <div className=" mx-auto  w-[1140px] bg-[#F9F9F9] dark:bg-[#141414]  dark:py-[20px] dark:pb-[10px] transition-colors duration-300  " >

                <h1 className="text-[42px] text-[#1F2937]
              h-[64px] w-[540px] dark:text-[#AEBCCF] ">{translations.footerH1}</h1>


                <div className="flex mt-[100px] gap-x-96">
                    <a href="https://fsweb-s10g2-redux-filmler-solution-deploy.vercel.app/movies" className="underline underline-offset-4  w-[297px] text-[#AF0C48] dark:text-[#E1E1FF] text-[20px]">
                        👉 {translations.mail}
                    </a>


                    <nav className="flex justify-between  gap-x-6 w-[297px]">
                        <a href="https://github.com/ozgecanodemis" className=" text-[#0A0A14] dark:text-[#E1E1FF] text-[18px]">
                            {translations.navigator1}
                        </a>

                        <a href="https://github.com/ozgecanodemis" className="  text-[#00AB6B] text-[18px]">
                            {translations.navigator2}
                        </a>
                        <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a/" className="  text-[#0077B5] text-[18px]">
                            {translations.navigator3}
                        </a>

                    </nav>




                </div>


            </div>
        </div >

    );
}

export default Footer