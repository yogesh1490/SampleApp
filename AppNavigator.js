import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './components/Splash';
import Login from './components/Login';
import Tab from './components/Tab';

const AppNavigator = createStackNavigator({
  Splash,
  Login,
  Tab
},
{initialRouteName:'Splash'}

);
const AppContainer= createAppContainer(AppNavigator);
export default AppContainer;