import { useContext } from "react";
import { ThemeContext } from "./ThemeValueContext";

function Theme() {
  const theme = useContext(ThemeContext);

  return <h2>{theme}</h2>;
}

export default Theme;
