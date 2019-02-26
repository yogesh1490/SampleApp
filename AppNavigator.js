import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Tab from "./components/Tab";
import About from "./components/About";
import DrawerScreen from "./components/DrawerScreen";

const AppNavigator = createStackNavigator(
  {
    Splash,
    Login,
    Tab,
    DrawerScreen,
    About,
    Map
  },
  { initialRouteName: "Splash" }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
