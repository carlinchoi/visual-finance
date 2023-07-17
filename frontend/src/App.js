// project import
// import Routes from "routes";
import { Routes } from "react-router-dom";
import ThemeCustomization from "themes";
import ScrollTop from "components/ScrollTop";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
