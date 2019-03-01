import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Tab from "./components/Tab";
import About from "./components/About";
import DrawerScreen from "./components/DrawerScreen";
import SettingsScreen from "./components/Settings";
//import Viewss from "./components/Viewss";
import InputText from "./components/InputText";
import OutputText from "./components/OutputText";

const AppNavigator = createStackNavigator(
  {
    Splash,
    Login,
    Tab,
    DrawerScreen,
    About,
    Map,
    SettingsScreen,
    InputText,
    OutputText
  },
  { initialRouteName: "Splash" }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
