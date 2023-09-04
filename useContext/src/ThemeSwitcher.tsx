import { useContext } from 'react';
import { ThemeContext } from "./App";


const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);


  const HandleOnChange = () => {
    themeContext?.dOrL === "Dark" ? themeContext.setBarkOrLight("Light") : themeContext?.setBarkOrLight("Dark");
  }
  console.log(themeContext?.dOrL)

  return (
    <button style={{ margin: "60px" }} onClick={HandleOnChange}>Changer</button>
  )
}

export default ThemeSwitcher
