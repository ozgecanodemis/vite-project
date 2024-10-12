import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const ProfileSection = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-12">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl text-[#1F2937] dark:text-[#AEBCCF] mb-8">
                    {translations.headingProfile}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div className="flex flex-col">
                        <h2 className="text-xl sm:text-2xl text-[#4338CA] dark:text-[#B7AAFF] mb-4">
                            {translations.ProfileH1}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP1}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP2}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP3}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP4}</p>
                            </div>
                            <div>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP5}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP6}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP7}</p>
                                <p className="text-sm text-black dark:text-white">{translations.ProfileP8}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col">
                        <h2 className="text-xl sm:text-2xl text-[#4338CA] dark:text-[#B7AAFF] mb-4">
                            {translations.ProfileH2}
                        </h2>
                        <p className="text-sm text-[#6B7280] dark:text-white">
                            {translations.ProfileP9}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-300 dark:border-gray-700 mt-8"></div>
            </div>
        </div>
    );
};

export default ProfileSection;
