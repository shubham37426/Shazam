import {useState,useContext, createContext} from 'react'

export const ThemeContext = createContext()

export const useTheme = () => {
  // get the context
  const context = useContext(ThemeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};


export const DarkThemeProvider = ({children }) => {
  const [darkTheme, setDarkTheme] = useState(true)
 
const themeHandler = ()=>{
  setDarkTheme((prevState)=> !prevState)
}

  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}
