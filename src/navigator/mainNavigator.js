import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1514456Navigator from '../features/BlankScreen1514456/navigator';
import BlankScreen1414455Navigator from '../features/BlankScreen1414455/navigator';
import BlankScreen1314454Navigator from '../features/BlankScreen1314454/navigator';
import BlankScreen1214453Navigator from '../features/BlankScreen1214453/navigator';
import BlankScreen1114452Navigator from '../features/BlankScreen1114452/navigator';
import BlankScreen1014451Navigator from '../features/BlankScreen1014451/navigator';
import BlankScreen914450Navigator from '../features/BlankScreen914450/navigator';
import BlankScreen614440Navigator from '../features/BlankScreen614440/navigator';
import BlankScreen414437Navigator from '../features/BlankScreen414437/navigator';
import BlankScreen214396Navigator from '../features/BlankScreen214396/navigator';
import BlankScreen114377Navigator from '../features/BlankScreen114377/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1514456: { screen: BlankScreen1514456Navigator },
BlankScreen1414455: { screen: BlankScreen1414455Navigator },
BlankScreen1314454: { screen: BlankScreen1314454Navigator },
BlankScreen1214453: { screen: BlankScreen1214453Navigator },
BlankScreen1114452: { screen: BlankScreen1114452Navigator },
BlankScreen1014451: { screen: BlankScreen1014451Navigator },
BlankScreen914450: { screen: BlankScreen914450Navigator },
BlankScreen614440: { screen: BlankScreen614440Navigator },
BlankScreen414437: { screen: BlankScreen414437Navigator },
BlankScreen214396: { screen: BlankScreen214396Navigator },
BlankScreen114377: { screen: BlankScreen114377Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
