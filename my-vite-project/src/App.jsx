import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Content from './components/Content';
import InfoSection from './components/InfoSection';
import SkillsSection from './components/SkillsSection';
import ProfileSection from './components/ProfileSection';
import ProjectSection from './components/ProjectsSection';


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
        <SkillsSection />
        <ProfileSection />
        <ProjectSection />


      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;