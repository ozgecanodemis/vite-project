import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import avImage from '../assets/av.png';

const InfoSection = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                {/* 1. parag. */}
                <div className="flex-1 mb-8 lg:mb-0">
                    {/* First Paragraph */}
                    <p className="text-sm sm:text-md text-[#3730A3] dark:text-gray-300 mb-2">
                        {translations.cardSubtitle}
                    </p>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-4">
                        {translations.cardTitle}
                    </h1>

                    {/* 2. Paragraph */}
                    <p className="text-base sm:text-lg font-normal text-[#6B7280] dark:text-white mb-6">
                        {translations.cardDescription}
                    </p>

                    {/* Butonlar */}
                    <div className="flex space-x-4">
                        <a href="mailto:odemisozgecan@gmail.com">
                            <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md hover:bg-[#4c44cc] transition dark:bg-[#E1E1FF] dark:hover:bg-gray-400 dark:text-black">
                                {translations.button1}
                            </button>
                        </a>
                        <a href="https://github.com/ozgecanodemis">
                            <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#E1E1FF] transition">
                                {translations.button2}
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a">
                            <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:text-[#E1E1FF] transition">
                                {translations.button3}
                            </button>
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="lg:ml-6">
                    <img src={avImage} className="w-full max-w-sm object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
