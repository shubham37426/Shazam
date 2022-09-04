import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import {Box,ThemeProvider, createTheme,CssBaseline} from '@mui/material'
import {Navbar , Feed , SearchFeed, VideoDetail , ChannelDetail} from './components'
import { useState ,createContext, useContext} from 'react';

export const DarkContext = createContext()
function App() {
  const [mode , setMode] = useState(true)
  const modeHandler = ()=>{
    setMode((prevstate)=> !prevstate)
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode?'dark':'light',
      
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Router>
      <Box bgcolor={'Background.default'} color={'text.primary'} >
        <DarkContext.Provider value={{mode,modeHandler}}>
          <Navbar/>
          </DarkContext.Provider>

    <Routes>
      <Route path='/' exact element={<Feed/>}  />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />

    </Routes>
    </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
