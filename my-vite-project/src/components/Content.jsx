import React, { useContext } from 'react';
import DarkModeBtn from './DarkModeBtn';
import Languagetxt from './Languagetxt';
import Avatar from './Avatar';
import { LanguageContext } from '../contexts/LanguageContext';

function Content() {
    const { translations } = useContext(LanguageContext);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="m-auto max-w-[1140px] mx-auto">
                {/* Dark Mode Toggle and Language Switcher */}
                <div className="mt-[20px] flex justify-end mb-6 dark:text-[#B7AAFF]">
                    <DarkModeBtn />
                    <span className="mx-2 text-gray-800 dark:text-[#B7AAFF]">|</span>
                    <Languagetxt />
                </div>

                {/* Avatar and Info Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center">
                        {/* Avatar Component */}
                        <Avatar />
                    </div>

                    {/* Skills, Projects, and Hire Me Section */}
                    <div className="ml-6 text-left flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mt-4 md:mt-0">
                        <p
                            className="text-[#6B7280] dark:text-[#6B7280] mb-2 translate-y-[6px] cursor-pointer"
                            onClick={() => scrollToSection('skills-section')}
                        >
                            {translations.skills}
                        </p>
                        <p
                            className="text-[#6B7280] dark:text-[#6B7280] mb-4 translate-y-[6px] cursor-pointer"
                            onClick={() => scrollToSection('projects-section')}
                        >
                            {translations.projects}
                        </p>
                        <a
                            href="mailto:odemisozgecan@gmail.com"
                            className="border-2 border-[#3730A3] text-[#3730A3] dark:border-white dark:text-[#3730A3] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:bg-white dark:text-gray-900 transition dark:hover:bg-gray-400 dark:hover:border-gray-400"
                        >
                            {translations.hireMe}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
