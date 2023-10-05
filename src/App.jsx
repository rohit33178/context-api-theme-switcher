import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTheme, { ThemeProvider } from './context/ThemeContext'
import Card from './components/Card'

function App() {
  const {currentTheme, setLightTheme, setDarkTheme} = useTheme()
  const [themeMode, setthemeMode] = useState("light")
  const handleTheme = () => {
    setthemeMode(themeMode === 'light' ? 'dark' : 'light')
    if(themeMode === 'light'){
      setLightTheme()
    }else{
      setDarkTheme()
    }
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{
      currentTheme, 
      setDarkTheme, 
      setLightTheme
    }}>

        <h3 className="flex gap-2 text-4xl p-4 text-center w-1/4 h-1/2 mx-auto dark:bg-black dark:text-white bg-white-600 text-black">
        <img src={themeMode === 'light' ? viteLogo : reactLogo} className='w-16 h-16 mt-1'/>
        Theme Switcher</h3>
        <Card />
        <button className='flex gap-2 absolute  text-center top-3 right-3 dark:bg-black dark:text-yellow-200 dark:p-2 dark:rounded-md text-white bg-gray-600 p-2 rounded-md' onClick={() => handleTheme(themeMode)}>
          <img src={themeMode === 'light' ? viteLogo : reactLogo} className='w-4 h-4 mt-1'/>
          {themeMode === 'light' ? 'dark': 'light'}
        </button>
    </ThemeProvider>
  )
}

export default App
