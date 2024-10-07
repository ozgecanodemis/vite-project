import useTheme from '../contexts/DarkModeContext';

function DarkModeBtn
    () {
    const { themeMode, lightMode, darkMode } = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer pt-[2px]">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
            />
            <div className="w-14 h-5 bg-[#3730A3] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[36px] peer-checked:after:border-yellow after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-yellow-400 after:border-yellow-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
            <span className="ml-3 text-[0.7rem] font-medium text-gray-900 dark:text-gray-300">
                {themeMode === 'dark' ? (
                    <>
                        <span className="text-gray-00">LIGHT MODE</span>
                    </>
                ) : (
                    <>
                        <span className="text-gray-500">DARK MODE</span>
                    </>
                )}
            </span>
        </label>
    );
}

export default DarkModeBtn
