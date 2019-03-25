import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from "./components/Splash";
import Login from "./components/Login";
import Tab from "./components/Tab";
import About from "./components/About";
import DrawerScreen from "./components/DrawerScreen";
import SettingsScreen from "./components/Settings";
import Views from "./components/Views";
import InputText from "./components/InputText";
import OutputText from "./components/OutputText";
import NavigationDrawerScreen from "./components/NavigationDrawerScreen";
import Employee from "./components/Employee";
import NumEmployee from "./components/NumEmployee";

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
    OutputText,
    Views,
    Employee,
    NavigationDrawerScreen,
    NumEmployee,
  },
  { initialRouteName: "Splash"}
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
