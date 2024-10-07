import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const CardInfo = () => {
    const { translations } = useContext(LanguageContext); // Çeviri bilgilerini alıyoruz

    return (
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
            {/* Text Content */}
            <div className="flex-1">
                {/* First Paragraph */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {translations.cardSubtitle}
                </p>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {translations.cardTitle}
                </h1>

                {/* Second Paragraph */}
                <p className="text-md text-gray-700 dark:text-gray-400 mb-6">
                    {translations.cardDescription}
                </p>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md hover:bg-[#4c44cc] transition">
                        {translations.button1}
                    </button>
                    <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md hover:bg-[#4c44cc] transition">
                        {translations.button2}
                    </button>
                    <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md hover:bg-[#4c44cc] transition">
                        {translations.button3}
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="ml-6">
                <img
                    src="/path/to/your/image.jpg"
                    alt="Card Illustration"
                    className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default CardInfo;
