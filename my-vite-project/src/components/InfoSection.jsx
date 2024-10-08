import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import avImage from '../assets/av.png';


const InfoSection = () => {
    const { translations } = useContext(LanguageContext); // Çeviri bilgilerini almayı unutmaaa!!!

    return (
        <div className=" max-w-[1140px] flex items-center justify-between bg-white dark:bg-gray-900 transition-colors duration-300 font-inter mx-auto my-3">
            {/* 1. parag. */}
            <div className="flex-1">
                {/* First Paragraph */}
                <p className="text-m text-[#3730A3] dark:text-gray-300 mb-2">
                    {translations.cardSubtitle}
                </p>


                {/* Heading */}
                <h1 className="text-7xl max-w-2xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-4">
                    {translations.cardTitle}
                </h1>

                {/* 2. Paragraph #6B7280*/}
                <p className="text-lg font-normal text-[#6B7280]  dark:text-[#FFFFFF] font-normal mb-6 ">
                    {translations.cardDescription}
                </p>


                {/* Butonlar */}
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md hover:bg-[#4c44cc] transition dark:bg-[#E1E1FF] dark:hover:bg-gray-400 dark:text-[#000000]" >
                        {translations.button1}
                    </button>
                    <a href="https://github.com/ozgecanodemis">
                        <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#E1E1FF] transition">
                            {translations.button2}
                        </button>
                    </a>

                    <a href='https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a'>
                        <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF]   px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#E1E1FF] transition">
                            {translations.button3}
                        </button>
                    </a>
                </div>
            </div>

            {/* Image*/}

            <div className="ml-6">
                <img
                    src={avImage}
                    className="w-[476px] h-[375px] object-cover rounded-lg shadow-lg "
                />
            </div>

        </div>
    );
};

export default InfoSection;
