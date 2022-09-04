import  {useTheme} from './ThemeContext'
const TestComp = () => {
    const {darkTheme,themeHandler} = useTheme()
  return (<>
    <div style={{
    background:darkTheme?'black':'white',
    color:darkTheme?'white':'black',
    width:'100px',
    height:'100px'
  }
    }>TestComp</div>


<button onClick={themeHandler}>Toggle THeme</button>

    </>
  )
}

export default TestComp