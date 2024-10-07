import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Content from './components/Content';
import InfoSection from './components/InfoSection';


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => setThemeMode('light');
  const darkMode = () => setThemeMode('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <LanguageProvider>
        <Content />
        <InfoSection />


      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;