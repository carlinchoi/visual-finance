// project import
// import Routes from "routes";
import { Routes } from "react-router-dom";
import Theme from "./themes";
import ScrollTop from "./components/ScrollTop";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <Theme>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </Theme>
);

export default App;
